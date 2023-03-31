import { Container } from './styles'

import { CMDIcon } from '../CMDIcon'
import { DiscordIcon } from '../DiscordIcon'

import { CMD } from '../CMD'
import { Discord } from '../Discord';

import { useSelector } from 'react-redux';
import { desktop } from '../../store/desktopSlice';

export const Desktop = () => {
  const { aboutOpen, projectsOpen } = useSelector(desktop)

  return (
    <Container>
      <CMDIcon />
      <DiscordIcon />

      {aboutOpen && <CMD />}
      {projectsOpen && <Discord />}
    </Container>
  )
}