import { Container } from "./styles"
import { HiCommandLine } from 'react-icons/hi2'

import { handleOpen } from "../../store/aboutSlice"
import { useDispatch } from "react-redux"

export const IconCMD = () => {
  const dispatch = useDispatch()

  const open = () => {
    dispatch(handleOpen())
  }

  return (
    <Container onDoubleClick={open}>
      <HiCommandLine size={40} />
      <h1>sobre mim.cmd</h1>
    </Container>
  )
}