import { Container } from "./styles"
import { BsDiscord } from 'react-icons/bs'
import Draggable, { DraggableCore } from 'react-draggable';

import { openProjects } from "../../store/desktopSlice"
import { useDispatch } from "react-redux"
import { useState } from "react";

export const DiscordIcon = () => {
  const dispatch = useDispatch()
  const [canOpen, setCanOpen] = useState(true)

  const openHandler = () => {
    canOpen && dispatch(openProjects())
  }

  const handleCanOpen = () => {
    setTimeout(() => { setCanOpen(true) })
  }

  return (
    <DraggableCore>
      <Draggable
        axis="both"
        handle=".handle"
        defaultPosition={{ x: 0, y: 100 }}
        grid={[100, 100]}
        scale={1}
        bounds={{ left: 0, top: 0, right: window.innerWidth - 100, bottom: window.innerHeight - 200 }}
        onDrag={() => setCanOpen(false)}
        onStop={handleCanOpen}
      >
        <Container className="handle" onClick={openHandler}>
          <BsDiscord size={40} />
          <h1>meus projetos.dsc</h1>
        </Container>
      </Draggable>
    </DraggableCore>
  )
}