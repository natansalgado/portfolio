import { Container } from './styles'
import { CMD } from '../CMD'
import { IconCMD } from '../IconCMD'

import { useSelector } from 'react-redux';
import { desktop } from '../../store/desktopSlice';

export const Desktop = () => {
  const { aboutOpen } = useSelector(desktop)

  return (
    <Container>
      <IconCMD />
      {
        aboutOpen &&
        <CMD />
      }
    </Container>
  )
}