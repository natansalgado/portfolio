import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'

interface State {
  actived: string
  aboutOpen: boolean
  projectsOpen: boolean
}

const initialState: State = {
  actived: 'none',
  aboutOpen: false,
  projectsOpen: false
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
    },
    activeAbout: (state) => {
      return { ...state, actived: 'about' }
    },
    // PROJECTS
    openProjects: (state) => {
      return { ...state, projectsOpen: true }
    },
    handleProjects: (state) => {
      return { ...state, projectsOpen: !state.projectsOpen }
    },
    activeProjects: (state) => {
      return { ...state, actived: 'projects' }
    },
  }
})

export const {
  openAbout, handleAbout, activeAbout,
  openProjects, handleProjects, activeProjects
} = slice.actions

export const desktop = (state: RootState) => state.desktop
export default slice.reducer