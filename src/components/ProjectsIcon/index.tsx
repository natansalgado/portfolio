import { Container } from "./styles"
import { BsDiscord } from 'react-icons/bs'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

import { openProjects, setProjectsPosition, desktop } from "../../store/desktopSlice"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";

export const ProjectsIcon = () => {
  const { projectsPosition } = useSelector(desktop)
  const dispatch = useDispatch()
  const [canOpen, setCanOpen] = useState(true)

  const openHandler = () => {
    canOpen && dispatch(openProjects())
  }

  const handleOnStop = (e: DraggableEvent, data: DraggableData) => {
    setTimeout(() => { setCanOpen(true) })
    dispatch(setProjectsPosition({ x: data.x, y: data.y }))
  }

  return (
    <Draggable
      axis="both"
      handle=".handle"
      position={projectsPosition}
      grid={[100, 100]}
      scale={1}
      bounds={{ left: 0, top: 0, right: window.innerWidth - 100, bottom: window.innerHeight - 200 }}
      onDrag={() => setCanOpen(false)}
      onStop={handleOnStop}
    >
      <Container className="handle" onClick={openHandler}>
        <BsDiscord size={40} />
        <h1>meus projetos.dsc</h1>
      </Container>
    </Draggable>
  )
}