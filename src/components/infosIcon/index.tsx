import { Container } from "./styles"
import { BsInfoCircleFill } from 'react-icons/bs'
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

import { openInfos, setInfosIconPosition, desktop } from "../../store/desktopSlice"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react";

export const InfosIcon = () => {
  const { infosIconPosition } = useSelector(desktop)
  const dispatch = useDispatch()
  const [canOpen, setCanOpen] = useState(true)

  const openHandler = () => {
    canOpen && dispatch(openInfos())
  }

  const handleOnStop = (e: DraggableEvent, data: DraggableData) => {
    setTimeout(() => { setCanOpen(true) })
    dispatch(setInfosIconPosition({ x: data.x, y: data.y }))
  }

  return (
    <Draggable
      axis="both"
      handle=".handle"
      position={infosIconPosition}
      grid={[100, 100]}
      scale={1}
      bounds={{ left: 0, top: 0, right: window.innerWidth - 100, bottom: window.innerHeight - 200 }}
      onDrag={() => setCanOpen(false)}
      onStop={handleOnStop}
    >
      <Container className="handle" onClick={openHandler} >
        <BsInfoCircleFill size={32} />
        <h1>infos</h1>
      </Container>
    </Draggable>
  )
}