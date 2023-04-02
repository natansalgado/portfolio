import { Button, Container } from './styles'
import { HiCommandLine } from 'react-icons/hi2'
import { BsDiscord } from 'react-icons/bs'
import { BsWhatsapp } from 'react-icons/bs'

import { useDispatch } from 'react-redux'
import { handleAbout, handleContact, handleProjects } from '../../store/desktopSlice'

import { useSelector } from 'react-redux'
import { desktop } from '../../store/desktopSlice'

export const Toolbar = () => {
  const { aboutOpen, projectsOpen, contactOpen } = useSelector(desktop)
  const dispatch = useDispatch()

  const aboutHandler = () => {
    dispatch(handleAbout())
  }

  const projectsHandler = () => {
    dispatch(handleProjects())
  }

  const contactHandler = () => {
    dispatch(handleContact())
  }

  return (
    <Container>
      <nav>
        <Button onClick={aboutHandler}>
          <HiCommandLine size={30} />
          {aboutOpen &&
            <div />
          }
        </Button>

        <Button onClick={projectsHandler}>
          <BsDiscord size={30} />
          {projectsOpen &&
            <div />
          }
        </Button>

        <Button onClick={contactHandler}>
          <BsWhatsapp size={26} />
          {contactOpen &&
            <div />
          }
        </Button>
      </nav>
    </Container>
  )
}