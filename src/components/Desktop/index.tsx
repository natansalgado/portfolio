import { Container } from './styles'

import { AboutIcon } from '../AboutIcon'
import { ProjectsIcon } from '../ProjectsIcon'
import { ContactIcon } from '../ContactIcon';

import { About } from '../About'
import { Projects } from '../Projects';

import { useSelector } from 'react-redux';
import { desktop } from '../../store/desktopSlice';

const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

export const Desktop = () => {
  const { aboutOpen, projectsOpen } = useSelector(desktop)

  return (
    <Container>
      {windowWidth > 720 &&
        <>
          <AboutIcon />
          <ProjectsIcon />
          <ContactIcon />
        </>
      }

      {aboutOpen && <About />}
      {projectsOpen && <Projects />}
    </Container>
  )
}