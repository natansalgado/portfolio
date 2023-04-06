import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '.'

interface State {
  actived: string
  aboutOpen: boolean
  projectsOpen: boolean
  contactOpen: boolean
  configsOpen: boolean
  project: number | null
  taskbarColor: string | null
  aboutIconPosition: { x: number, y: number }
  projectsIconPosition: { x: number, y: number }
  contactIconPosition: { x: number, y: number }
  configsIconPosition: { x: number, y: number }
}

const initialState: State = {
  actived: 'none',

  aboutOpen: false,
  projectsOpen: false,
  contactOpen: false,
  configsOpen: false,

  project: null,
  taskbarColor: null,

  aboutIconPosition: { x: 0, y: 0 },
  projectsIconPosition: { x: 0, y: 100 },
  contactIconPosition: { x: 0, y: 200 },
  configsIconPosition: { x: 0, y: 300 }
}

const slice = createSlice({
  name: 'desktop',
  initialState,
  reducers: {
    // ABOUT
    openAbout: (state) => {
      return { ...state, aboutOpen: true, actived: 'about' }
    },
    closeAbout: (state) => {
      return { ...state, aboutOpen: false, actived: 'none' }
    },
    handleAbout: (state) => {
      if (state.aboutOpen && !state.projectsOpen && !state.contactOpen) {
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
    closeProjects: (state) => {
      return { ...state, projectsOpen: false, actived: 'none' }
    },
    handleProjects: (state) => {
      if (state.projectsOpen && !state.aboutOpen && !state.contactOpen) {
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

    // CONTACT
    openContact: (state) => {
      return { ...state, contactOpen: true, actived: 'contact' }
    },
    closeContact: (state) => {
      return { ...state, contactOpen: false, actived: 'none' }
    },
    handleContact: (state) => {
      if (state.contactOpen && !state.aboutOpen && !state.projectsOpen) {
        return { ...state, contactOpen: false, actived: 'none' }
      }
      if (state.contactOpen && state.actived !== 'contact') {
        return { ...state, actived: 'contact' }
      }
      return { ...state, contactOpen: !state.contactOpen, actived: !state.contactOpen ? 'contact' : 'none' }
    },
    activeContact: (state) => {
      return { ...state, actived: 'contact' }
    },

    //CONFIGS
    openConfigs: (state) => {
      return { ...state, configsOpen: true, actived: 'configs' }
    },
    closeConfigs: (state) => {
      return { ...state, configsOpen: false, actived: 'none' }
    },
    handleConfigs: (state) => {
      if (state.configsOpen && !state.aboutOpen && !state.projectsOpen && !state.contactOpen) {
        return { ...state, configsOpen: false, actived: 'none' }
      }
      if (state.configsOpen && state.actived !== 'configs') {
        return { ...state, actived: 'configs' }
      }
      return { ...state, configsOpen: !state.configsOpen, actived: !state.configsOpen ? 'configs' : 'none' }
    },
    activeConfigs: (state) => {
      return { ...state, actived: 'configs' }
    },
    changeTaskbarColor: (state, { payload }) => {
      return { ...state, taskbarColor: payload }
    },


    // ICONS POSITION
    setAboutIconPosition: (state, { payload }) => {
      const { x, y } = payload
      if (JSON.stringify(payload) !== JSON.stringify(state.projectsIconPosition) &&
        JSON.stringify(payload) !== JSON.stringify(state.contactIconPosition) &&
        JSON.stringify(payload) !== JSON.stringify(state.configsIconPosition)) {
        return { ...state, aboutIconPosition: { x, y } }
      }
    },
    setProjectsIconPosition: (state, { payload }) => {
      const { x, y } = payload
      if (JSON.stringify(payload) !== JSON.stringify(state.aboutIconPosition) &&
        JSON.stringify(payload) !== JSON.stringify(state.contactIconPosition) &&
        JSON.stringify(payload) !== JSON.stringify(state.configsIconPosition)) {
        return { ...state, projectsIconPosition: { x, y } }
      }
    },
    setContactIconPosition: (state, { payload }) => {
      const { x, y } = payload
      if (JSON.stringify(payload) !== JSON.stringify(state.aboutIconPosition) &&
        JSON.stringify(payload) !== JSON.stringify(state.projectsIconPosition) &&
        JSON.stringify(payload) !== JSON.stringify(state.configsIconPosition)) {
        return { ...state, contactIconPosition: { x, y } }
      }
    },
    setConfigsIconPosition: (state, { payload }) => {
      const { x, y } = payload
      if (JSON.stringify(payload) !== JSON.stringify(state.aboutIconPosition) &&
        JSON.stringify(payload) !== JSON.stringify(state.projectsIconPosition) &&
        JSON.stringify(payload) !== JSON.stringify(state.contactIconPosition)) {
        return { ...state, configsIconPosition: { x, y } }
      }
    }
  }
})

export const {
  openAbout, closeAbout, handleAbout, activeAbout,
  openProjects, closeProjects, handleProjects, activeProjects, setProject,
  openContact, closeContact, handleContact, activeContact,
  openConfigs, closeConfigs, setConfigsIconPosition, handleConfigs, activeConfigs, changeTaskbarColor,
  setAboutIconPosition, setProjectsIconPosition, setContactIconPosition
} = slice.actions

export const desktop = (state: RootState) => state.desktop
export default slice.reducer