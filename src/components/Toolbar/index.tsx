import { Button, Container } from './styles'
import { HiCommandLine } from 'react-icons/hi2'
import { BsDiscord, BsWhatsapp, BsGear } from 'react-icons/bs'

import { useDispatch, useSelector } from 'react-redux'
import { handleAbout, handleContact, handleProjects, handleConfigs, desktop } from '../../store/desktopSlice'

export const Toolbar = () => {
  const { aboutOpen, projectsOpen, contactOpen, configsOpen } = useSelector(desktop)
  const dispatch = useDispatch()

  const openAbout = () => {
    return dispatch(handleAbout())
  }

  const openProjects = () => {
    return dispatch(handleProjects())
  }

  const openContact = () => {
    return dispatch(handleContact())
  }

  const openConfigs = () => {
    return dispatch(handleConfigs())
  }

  return (
    <Container>
      <nav>
        <Button onClick={openAbout}>
          <HiCommandLine size={30} />
          {aboutOpen && <div className='is-open' />}
        </Button>

        <Button onClick={openProjects}>
          <BsDiscord size={30} />
          {projectsOpen && <div className='is-open' />}
        </Button>

        <Button onClick={openContact}>
          <BsWhatsapp size={26} />
          {contactOpen && <div className='is-open' />}
        </Button>

        <Button onClick={openConfigs}>
          <BsGear size={26} />
          {configsOpen && <div className='is-open' />}
        </Button>

      </nav>
    </Container>
  )
}