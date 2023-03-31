import { useState } from 'react'
import { Container, Button, Box } from './styles'
import { IoCloseOutline, IoRemoveOutline } from 'react-icons/io5'
import { VscTerminalCmd } from 'react-icons/vsc'
import { TiTabsOutline } from 'react-icons/ti'

import Draggable from 'react-draggable'

import { useDispatch, useSelector } from 'react-redux'
import { handleProjects, activeProjects, desktop } from '../../store/desktopSlice'

const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

export const Discord = () => {
  const { actived } = useSelector(desktop)
  const dispatch = useDispatch()

  const [resize, setResize] = useState(false)
  const [text, setText] = useState('')

  const write = (text: string, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1))
      setTimeout(() => write(text, i + 1), 70)
    }
  }

  const handleClose = () => {
    dispatch(handleProjects())
  }

  const handleActived = () => {
    dispatch(activeProjects())
  }

  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{
        x: (windowWidth - ((80 / 100) * windowWidth)) / 2,
        y: (windowHeight - ((80 / 100) * windowHeight)) / 2
      }}
      scale={1}
      bounds={{ left: 0, top: 0, right: windowWidth - ((80 / 100) * windowWidth), bottom: (windowHeight - ((80 / 100) * windowHeight)) - 50 }}
      onStart={handleActived}
    >
      <Container onClick={handleActived} resize={resize} className={actived === 'projects' ? 'actived' : ''}>
        <header >
          <div className='handle'>
            <VscTerminalCmd size={16} />
            <h1>meus projetos.dsc</h1>
          </div>
          <div>
            <Button onClick={handleClose} color='#900'>
              <IoCloseOutline size={20} />
            </Button>
          </div>
        </header >
        <Box spellCheck='false' autoFocus />
      </Container >
    </Draggable>
  )
}