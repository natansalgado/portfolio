import { Container } from './styles'
import { HiCommandLine } from 'react-icons/hi2'

export const Toolbar = () => {
  return (
    <Container>
      <nav>
        <button>
          <HiCommandLine size={36} />
        </button>
      </nav>
    </Container>
  )
}