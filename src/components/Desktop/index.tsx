import { Container } from './styles'

import { CMDIcon } from '../CMDIcon'
import { DiscordIcon } from '../DiscordIcon'

import { CMD } from '../CMD'
import { Discord } from '../Discord';

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
          <CMDIcon />
          <DiscordIcon />
        </>
      }

      {aboutOpen && <CMD />}
      {projectsOpen && <Discord />}
    </Container>
  )
}