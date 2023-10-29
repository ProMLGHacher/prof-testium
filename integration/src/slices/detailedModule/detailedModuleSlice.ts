import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store/store'
import { $api } from '../../shared/api/api'

interface DetailedModuleState {
    isLoading: boolean,
    data?: Session[] | undefined,
    error?: string | undefined
}

const initialState: DetailedModuleState = {
    isLoading: true
}

export const detailedModuleSlice = createSlice({
    name: 'detailedModule',
    initialState,
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getDetailedModuleThunk.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getDetailedModuleThunk.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error.message
        })
        builder.addCase(getDetailedModuleThunk.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })
    },
})


export const getDetailedModuleThunk = createAsyncThunk<Session[], string>('getDetailedModuleThunk', async (moduleName, { dispatch }) => {
    const response = await $api.get<Session[]>(`/sessions/${moduleName}`)
    console.log(response);
    
    return response.data
})

export const {  } = detailedModuleSlice.actions

export const selectDetailedModule = (state: RootState) => state.detailedModule

export default detailedModuleSlice.reducer