import { Container } from "./styles"
import { HiCommandLine } from 'react-icons/hi2'
import Draggable from 'react-draggable';

import { openAbout } from "../../store/desktopSlice"
import { useDispatch } from "react-redux"

export const IconCMD = () => {
  const dispatch = useDispatch()

  const open = () => {
    dispatch(openAbout())
  }

  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      grid={[100, 100]}
      scale={1}>
      <Container className="handle" onClick={open}>
        <HiCommandLine size={40} />
        <h1>sobre mim.cmd</h1>
      </Container>
    </Draggable>
  )
}