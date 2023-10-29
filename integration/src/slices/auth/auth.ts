import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store/store'
import { $api } from '../../shared/api/api'
import { UserRole } from '../../entities/Module/Module'

interface AuthState {
    token: string | null,
    role?: UserRole | null
}

const initialState: AuthState = {
    token: localStorage.getItem('token'),
    role: localStorage.getItem("role") == "Common" ? UserRole.Common : UserRole.Organization
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
            state.role = undefined
            localStorage.removeItem('token')
            localStorage.removeItem('role')
        }
    },
    extraReducers: (builder) => {
        builder.addCase(regThunk.fulfilled, (state, action) => {
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('role', action.payload.role)
            state.token = action.payload.token
            state.role = action.payload.role
        })
        builder.addCase(regThunk.rejected, (state, _action) => {
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            state.token = null
            state.role = null
        })
        builder.addCase(loginThunk.fulfilled, (state, action) => {
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('role', action.payload.role)
            state.token = action.payload.token
            state.role = action.payload.role
        })
        builder.addCase(loginThunk.rejected, (state, _action) => {
            localStorage.removeItem('token')
            localStorage.removeItem('role')
            state.token = null
            state.role = null
        })
    },
})

type TokenData = {
    token: string,
    role: UserRole
}

type AuthData = {
    email: string,
    password: string
}

export const regThunk = createAsyncThunk<TokenData, AuthData>('regThunk', async (data, { dispatch }) => {
    const response = await $api.post<{tokenPair: {
        accessToken: string,
        refreshToken: string
    }
    role: UserRole}>('/signup', data)
    return {    
        ...response.data,
        token: response.data.tokenPair.accessToken
    }
})

export const loginThunk = createAsyncThunk<TokenData, AuthData>('logThunk', async (data, { dispatch }) => {
    const response = await $api.post<{tokenPair: {
        accessToken: string,
        refreshToken: string
    }
    role: UserRole}>('/signin', data)
    return {    
        ...response.data,
        token: response.data.tokenPair.accessToken
    }
})


export const { logOut } = authSlice.actions

export const selectToken = (state: RootState) => state.auth.token
export const selectRole = (state: RootState) => state.auth.role

export default authSlice.reducer