import { useEffect, useState } from 'react'
import { Container, Button, Box } from './styles'
import { IoCloseOutline, IoRemoveOutline } from 'react-icons/io5'
import { VscTerminalCmd } from 'react-icons/vsc'
import { TiTabsOutline } from 'react-icons/ti'

import Draggable from 'react-draggable'

import { useDispatch } from 'react-redux'
import { handleAbout } from '../../store/desktopSlice'

const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

export const CMD = () => {
  const defaultText = 'aaaaaaaaa aaaaaaaaaaaaaa'
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
    dispatch(handleAbout())
  }

  useEffect(() => {
    setTimeout(() => write(defaultText), 1000)
  }, [])

  return (
    <Draggable
      axis="both"
      handle=".handle"
      defaultPosition={{
        x: (windowWidth - ((80 / 100) * windowWidth)) / 2,
        y: ((windowHeight - ((100 / 100) * windowHeight)) / 2) - 50
      }}
      grid={[1, 1]}
      scale={1}>
      <Container resize={resize}>
        <header className='handle' >
          <div className='draghandle'>
            <VscTerminalCmd size={16} />
            <h1>sobre mim.cmd</h1>
          </div>
          <div>
            <Button onClick={handleClose} color='#900'>
              <IoCloseOutline size={20} />
            </Button>
          </div>
        </header >
        <Box spellCheck='false' autoFocus value={text} onChange={e => setText(e.target.value)} />
      </Container >
    </Draggable>
  )
}