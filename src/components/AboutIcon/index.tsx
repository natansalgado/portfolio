import { Container } from "./styles"
import { HiCommandLine } from 'react-icons/hi2'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

import { openAbout, setAboutIconPosition, desktop } from "../../store/desktopSlice"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";

export const AboutIcon = () => {
  const { aboutIconPosition } = useSelector(desktop)
  const dispatch = useDispatch()
  const [canOpen, setCanOpen] = useState(true)

  const openHandler = () => {
    canOpen && dispatch(openAbout())
  }

  const handleOnStop = (e: DraggableEvent, data: DraggableData) => {
    setTimeout(() => { setCanOpen(true) })
    dispatch(setAboutIconPosition({ x: data.x, y: data.y }))
  }

  return (
    <Draggable
      axis="both"
      handle=".handle"
      position={aboutIconPosition}
      grid={[100, 100]}
      scale={1}
      bounds={{ left: 0, top: 0, right: window.innerWidth - 100, bottom: window.innerHeight - 200 }}
      onDrag={() => setCanOpen(false)}
      onStop={handleOnStop}
    >
      <Container className="handle" onClick={openHandler} >
        <HiCommandLine size={40} />
        <h1>sobre mim</h1>
      </Container>
    </Draggable>
  )
}