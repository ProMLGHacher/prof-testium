import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { $api } from '../shared/api/api'
import { RootState } from '../store/store'
import { act } from 'react-dom/test-utils'
import { AxiosError, isAxiosError } from 'axios'

interface AuthState {
    token: string | null,
    role?: UserRole | null,
    name?: string | null,
    phone?: string | null,
    error?: string | undefined
}

export enum UserRole {
    Employee = 'Employee',
    HrManager = 'HrManager',
    Manager = 'Manager',
    Admin = 'Admin',
}

const initialState: AuthState = {
    token: localStorage.getItem('token'),
    role: localStorage.getItem("role") == "Admin" ? UserRole.Admin : localStorage.getItem("role") == "Employee" ? UserRole.Employee : localStorage.getItem("role") == "HrManager" ? UserRole.HrManager : UserRole.Manager,
    phone: localStorage.getItem('phone'),
    name: localStorage.getItem('name')
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload
        },
        logOut: (state) => {
            state.token = null
            state.role = null
            state.phone = null
            state.name = null
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            localStorage.removeItem('name')
            localStorage.removeItem('phone')
            window.location.reload()
        }
    },
    extraReducers: (builder) => {
        builder.addCase(regThunk.fulfilled, (state, action) => {
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('role', UserRole.Admin)
            localStorage.setItem('name', action.payload.name!)
            localStorage.setItem('phone', action.payload.phone)
            state.token = action.payload.token
            state.role = UserRole.Admin
            state.name = action.payload.name
            state.phone = action.payload.phone
            // window.location.reload()
        })
        builder.addCase(regThunk.rejected, (state, _action) => {
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            localStorage.removeItem('name')
            localStorage.removeItem('phone')
            state.token = null
            state.role = null
            state.name = null
            state.phone = null
        })
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('role', action.payload.role!)
            localStorage.setItem('name', action.payload.name!)
            localStorage.setItem('phone', action.payload.phone)
            state.token = action.payload.token
            state.role = action.payload.role
            state.name = action.payload.name
            state.phone = action.payload.phone
            window.location.reload()
        })
        builder.addCase(loginThunk.rejected, (state, _action) => {
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            localStorage.removeItem('name')
            localStorage.removeItem('phone')
            state.token = null
            state.role = null
            state.name = null
            state.phone = null
        })
        // builder.addCase(loginThunk.fulfilled, (state, action) => {
        //     localStorage.setItem('token', action.payload.token)
        //     localStorage.setItem('role', UserRole.Admin)
        //     state.token = action.payload.token
        //     state.role = UserRole.Admin
        // })
        // builder.addCase(loginThunk.rejected, (state, _action) => {
        //     localStorage.removeItem('token')
        //     localStorage.removeItem('role')
        //     state.token = null
        //     state.role = null
        // })
    },
})

type TokenData = {
    token: string,
    name?: string,
    phone: string,
    role?: UserRole
}

type AuthData = {
    name: string,
    phoneAdmin: string,
    passwordAdmin: string
}

export const regThunk = createAsyncThunk<TokenData, AuthData>('regThunk', async (data, { dispatch }) => {
    data.phoneAdmin = data.phoneAdmin.split('').filter((elem) => {
        return elem == '0' ? true : Number(elem)
    }).join('')
    if (data.phoneAdmin[0] == '7') {
        const phone = data.phoneAdmin.split('')
        phone[0] = '8'
        data.phoneAdmin = phone.join('')
    }
    let response = undefined
    try {
        response = await $api.post<{
            accessToken: string,
            refreshToken: string
        }>('/organization', data)
    } catch(e) {
        if (isAxiosError(e)) {
            e.response?.status == 400 && alert('Данный номер уже зарегистрирован')
            e.response?.status == 409 && alert('Организация с таким именем уже существует')
        }
    }
    if (!response) throw new Error('')
    return {
        token: response.data.accessToken,
        name: data.name,
        phone: data.phoneAdmin
    }
})

type AuthDt = {
    phone: string,
    password: string
}

type Tokens = {
    tokenPair: {
        accessToken: string,
        refreshToken: string
    },
    role: UserRole
}

export const loginThunk = createAsyncThunk<TokenData, AuthDt>('logThunk', async (data, { dispatch }) => {
    data.phone = data.phone.split('').filter((elem) => {
        return elem == '0' ? true : Number(elem)
    }).join('')
    if (data.phone[0] == '7') {
        const phone = data.phone.split('')
        phone[0] = '8'
        data.phone = phone.join('')
    }
    let response = undefined
    try {
        response = await $api.post<{
            tokenPair: {
                accessToken: string,
                refreshToken: string
            },
            role: UserRole
        }>('/signin', data)
    } catch(e) {
        if (isAxiosError(e)) {
            e.response?.status == 404 && alert('Аккаунт не существует')
            e.response?.status == 400 && alert('Не верный пароль')
        }
    }
    if (!response) throw new Error('')
    return {
        phone: data.phone,
        role: response.data.role,
        token: response.data.tokenPair.accessToken
    }
})


export const { logOut } = authSlice.actions

export const selectToken = (state: RootState) => state.auth.token
export const selectRole = (state: RootState) => state.auth.role
export const selectPhone = (state: RootState) => state.auth.phone
export const selectName = (state: RootState) => state.auth.name

export default authSlice.reducer