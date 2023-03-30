import { configureStore } from '@reduxjs/toolkit'
import aboutReducer from './aboutSlice'

const store = configureStore({
  reducer: {
    about: aboutReducer
  }
})

export default store

export type RootState = ReturnType<typeof store.getState>