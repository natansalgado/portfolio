import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'

interface State {
  actived: string
  aboutOpen: boolean
  projectsOpen: boolean
  project: number | null
}

const initialState: State = {
  actived: 'none',
  aboutOpen: false,
  projectsOpen: false,
  project: null
}

const slice = createSlice({
  name: 'desktop',
  initialState,
  reducers: {
    // ABOUT
    openAbout: (state) => {
      return { ...state, aboutOpen: true, actived: 'about' }
    },
    handleAbout: (state) => {
      return { ...state, aboutOpen: !state.aboutOpen, actived: !state.aboutOpen ? 'about' : 'none' }
    },
    activeAbout: (state) => {
      return { ...state, actived: 'about' }
    },
    // PROJECTS
    openProjects: (state) => {
      return { ...state, projectsOpen: true, actived: 'projects' }
    },
    handleProjects: (state) => {
      return { ...state, projectsOpen: !state.projectsOpen, actived: !state.projectsOpen ? 'projects' : 'none' }
    },
    activeProjects: (state) => {
      return { ...state, actived: 'projects' }
    },
    setProject: (state, {payload}) => {
      return {...state, project: payload}
    }
  }
})

export const {
  openAbout, handleAbout, activeAbout,
  openProjects, handleProjects, activeProjects, setProject
} = slice.actions

export const desktop = (state: RootState) => state.desktop
export default slice.reducer