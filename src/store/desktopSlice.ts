import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'

interface State {
  aboutOpen: boolean
}

const initialState: State = {
  aboutOpen: false
}

const slice = createSlice({
  name: 'desktop',
  initialState,
  reducers: {
    // ABOUT
    openAbout: (state) => {
      return { ...state, aboutOpen: true }
    },
    handleAbout: (state) => {
      return { ...state, aboutOpen: !state.aboutOpen }
    }
  }
})

export const { openAbout, handleAbout } = slice.actions

export const desktop = (state: RootState) => state.desktop
export default slice.reducer