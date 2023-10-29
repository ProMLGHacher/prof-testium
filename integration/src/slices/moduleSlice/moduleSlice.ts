import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store/store'
import { $api } from '../../shared/api/api'
import { Module } from '../../entities/Module/Module'
import { act } from 'react-dom/test-utils'

interface ModuleState {
    isLoading: boolean,
    data?: Module[] | undefined,
    error?: string | undefined
}

const initialState: ModuleState = {
    isLoading: true,
    data: undefined
}

export const moduleSlice = createSlice({
    name: 'module',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getModulesThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getModulesThunk.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
        builder.addCase(getModulesThunk.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(createModuleThunk.fulfilled, (state, action) => {
            console.log('hello');
        })
        builder.addCase(createModuleThunk.rejected, (state, action) => {
            console.log(action.error.message);
        })
    },
})


export const getModulesThunk = createAsyncThunk<Module[], undefined>('getModulesThunk', async (_, { dispatch }) => {
    const response = await $api.get<Module[]>('/modules')
    return response.data
})

export const createModuleThunk = createAsyncThunk<Module, string>('createModuleThunk', async (moduleName, { dispatch }) => {
    const response = await $api.post<Module>('/module', {
        name: moduleName
    })
    return response.data
})

export const {  } = moduleSlice.actions

export const selectModule = (state: RootState) => state.modules

export default moduleSlice.reducer