import { Container } from "./styles"
import { HiCommandLine } from 'react-icons/hi2'
import Draggable from 'react-draggable';

import { openAbout } from "../../store/desktopSlice"
import { useDispatch } from "react-redux"
import { useState } from "react";

export const CMDIcon = () => {
  const dispatch = useDispatch()
  const [canOpen, setCanOpen] = useState(true)

  const openHandler = () => {
    canOpen && dispatch(openAbout())
  }

  const handleCanOpen = () => {
    setTimeout(() => { setCanOpen(true) })
  }

  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      grid={[100, 100]}
      scale={1}
      bounds={{ left: 0, top: 0, right: window.innerWidth - 100, bottom: window.innerHeight - 200 }}
      onDrag={() => setCanOpen(false)}
      onStop={handleCanOpen}
    >
      <Container className="handle" onClick={openHandler} >
        <HiCommandLine size={40} />
        <h1>sobre mim.cmd</h1>
      </Container>
    </Draggable>
  )
}