import { Button, Container } from './styles'
import { HiCommandLine } from 'react-icons/hi2'
import { BsDiscord, BsWhatsapp, BsGear, BsInfoCircleFill } from 'react-icons/bs'

import { useDispatch, useSelector } from 'react-redux'
import { handleAbout, handleContact, handleProjects, handleConfigs, desktop, handleInfos } from '../../store/desktopSlice'

export const Taskbar = () => {
  const { aboutOpen, projectsOpen, contactOpen, configsOpen, infosOpen, taskbarColor } = useSelector(desktop)
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

  const openInfos = () => {
    return dispatch(handleInfos())
  }

  return (
    <Container taskbarColor={taskbarColor}>
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

        <Button onClick={openInfos}>
          <BsInfoCircleFill size={26} />
          {infosOpen && <div className='is-open' />}
        </Button>

      </nav>
    </Container>
  )
}