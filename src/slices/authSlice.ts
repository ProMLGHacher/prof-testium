import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { $api } from '../shared/api/api'
import { RootState } from '../store/store'

interface AuthState {
    token: string | null,
    role?: UserRole | null,
    name?: string | null,
    phone?: string | null,
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
        }
    },
    extraReducers: (builder) => {
        builder.addCase(regThunk.fulfilled, (state, action) => {
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('role', UserRole.Admin)
            localStorage.setItem('name', action.payload.name)
            localStorage.setItem('phone', action.payload.phone)
            state.token = action.payload.token
            state.role = UserRole.Admin
            state.name = action.payload.name
            state.phone = action.payload.phone
        })
        builder.addCase(regThunk.rejected, (state, _action) => {
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            state.token = null
            state.role = null
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
    name: string,
    phone: string,
}

type AuthData = {
    name: string,
    phoneAdmin: string,
    passwordAdmin: string
}

export const regThunk = createAsyncThunk<TokenData, AuthData>('regThunk', async (data, { dispatch }) => {
    data.phoneAdmin = data.phoneAdmin.split('').filter((elem) => Number(elem)).join('')
    if (data.phoneAdmin[0] == '7') {
        const phone = data.phoneAdmin.split('')
        phone[0] = '8'
        data.phoneAdmin = phone.join('')
    }
    const response = await $api.post<{
        accessToken: string,
        refreshToken: string
    }>('/organization', data)
    return {
        token: response.data.accessToken,
        name: data.name,
        phone: data.phoneAdmin
    }
})

// export const loginThunk = createAsyncThunk<TokenData, AuthData>('logThunk', async (data, { dispatch }) => {
//     const response = await $api.post<{
//         tokenPair: {
//             accessToken: string,
//             refreshToken: string
//         }
//         role: UserRole
//     }>('/signin', data)
//     return {
//         ...response.data,
//         token: response.data.tokenPair.accessToken
//     }
// })


export const { logOut } = authSlice.actions

export const selectToken = (state: RootState) => state.auth.token
export const selectRole = (state: RootState) => state.auth.role
export const selectPhone = (state: RootState) => state.auth.phone
export const selectName = (state: RootState) => state.auth.name

export default authSlice.reducer