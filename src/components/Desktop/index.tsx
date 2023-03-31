import { Container } from './styles'
import { CMD } from '../CMD'
import { IconCMD } from '../IconCMD'

import { useSelector } from 'react-redux';
import { about } from '../../store/aboutSlice';

export const Desktop = () => {
  const { open } = useSelector(about)

  return (
    <Container>
      <IconCMD />
      {
        open &&
        <CMD />
      }
    </Container>
  )
}