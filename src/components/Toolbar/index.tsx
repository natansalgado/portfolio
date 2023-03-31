import { Button, Container } from './styles'
import { HiCommandLine } from 'react-icons/hi2'
import { BsDiscord } from 'react-icons/bs'

import { useDispatch } from 'react-redux'
import { handleAbout, handleProjects } from '../../store/desktopSlice'

import { useSelector } from 'react-redux'
import { desktop } from '../../store/desktopSlice'

export const Toolbar = () => {
  const { aboutOpen, projectsOpen } = useSelector(desktop)
  const dispatch = useDispatch()

  const aboutHandler = () => {
    dispatch(handleAbout())
  }

  const projectsHandler = () => {
    dispatch(handleProjects())
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
      </nav>
    </Container>
  )
}