import { configureStore } from '@reduxjs/toolkit'
import authSlice from '../../slices/auth/auth'
import moduleSlice from '../../slices/moduleSlice/moduleSlice'
import detailedModuleSlice from '../../slices/detailedModule/detailedModuleSlice'

export const store = configureStore({
  reducer: {
    auth: authSlice,
    modules: moduleSlice,
    detailedModule: detailedModuleSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch