import { Container } from "./styles"
import { HiCommandLine } from 'react-icons/hi2'

interface Props {
  onClick?: () => void
}

export const IconCMD = ({ onClick }: Props) => {
  return (
    <Container className="draghandle" onClick={onClick}>
      <HiCommandLine size={40} />
      <h1>sobre.cmd</h1>
    </Container>
  )
}