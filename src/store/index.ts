import { configureStore } from '@reduxjs/toolkit'
import desktopReducer from './desktopSlice'

const store = configureStore({
  reducer: {
    desktop: desktopReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>