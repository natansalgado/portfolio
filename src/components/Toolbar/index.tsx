import { Container } from './styles'
import { HiCommandLine } from 'react-icons/hi2'

import { useDispatch } from 'react-redux'
import { handleAbout } from '../../store/desktopSlice'

export const Toolbar = () => {
  const dispatch = useDispatch()

  const aboutHandler = () => {
    dispatch(handleAbout())
  }

  return (
    <Container>
      <nav>
        <button onClick={aboutHandler}>
          <HiCommandLine size={36} />
        </button>
      </nav>
    </Container>
  )
}