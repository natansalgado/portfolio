import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'

interface State {
  actived: string
  aboutOpen: boolean
  projectsOpen: boolean
  project: number | null
  aboutPosition: { x: number, y: number }
  projectsPosition: { x: number, y: number }
}

const initialState: State = {
  actived: 'none',
  aboutOpen: false,
  projectsOpen: false,
  project: null,
  aboutPosition: { x: 0, y: 0 },
  projectsPosition: { x: 0, y: 100 }
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
      if (state.aboutOpen && !state.projectsOpen) {
        return { ...state, aboutOpen: false, actived: 'none' }
      }
      if (state.aboutOpen && state.actived !== 'about') {
        return { ...state, actived: 'about' }
      }
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
      if (state.projectsOpen && !state.aboutOpen) {
        return { ...state, projectsOpen: false, actived: 'none' }
      }
      if (state.projectsOpen && state.actived !== 'projects') {
        return { ...state, actived: 'projects' }
      }
      return { ...state, projectsOpen: !state.projectsOpen, actived: !state.projectsOpen ? 'projects' : 'none' }
    },
    activeProjects: (state) => {
      return { ...state, actived: 'projects' }
    },
    setProject: (state, { payload }) => {
      return { ...state, project: payload }
    },

    // ICONS POSITION
    setAboutPosition: (state, { payload }) => {
      const { x, y } = payload
      if (JSON.stringify(payload) !== JSON.stringify(state.projectsPosition)) {
        return { ...state, aboutPosition: { x, y } }
      }
    },
    setProjectsPosition: (state, { payload }) => {
      const { x, y } = payload
      if (JSON.stringify(payload) !== JSON.stringify(state.aboutPosition)) {
        return { ...state, projectsPosition: { x, y } }
      }
    }
  }
})

export const {
  openAbout, handleAbout, activeAbout,
  openProjects, handleProjects, activeProjects, setProject,
  setAboutPosition, setProjectsPosition
} = slice.actions

export const desktop = (state: RootState) => state.desktop
export default slice.reducer