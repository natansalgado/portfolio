import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'

interface State {
  open: boolean
}

const initialState: State = {
  open: false
}

const slice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    handleOpen: (state) => {
      return {
        ...state,
        open: !state.open
      }
    }
  }
})

export const { handleOpen } = slice.actions

export const about = (state: RootState) => state.about

export default slice.reducer