import { useEffect, useState } from 'react'
import { Container, CMD, Button, Box, Icon } from './styles'
import { IoCloseOutline, IoRemoveOutline } from 'react-icons/io5'
import { VscTerminalCmd } from 'react-icons/vsc'
import { TiTabsOutline } from 'react-icons/ti'
import { HiCommandLine } from 'react-icons/hi2'
import { Resizer } from '../Resizer'


export const About = () => {
  const defaultText = ''

  const [width, setWidth] = useState(1280)
  const [height, setHeight] = useState(720)
  const [open, setOpen] = useState(true)
  const [text, setText] = useState('')

  const write = (text: string, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1))
      setTimeout(() => write(text, i + 1), 70)
    }
  }

  const maximise = () => {
    setWidth(width >= 800 ? 600 : 1280)
    setHeight(height >= 600 ? 400 : 720)
  }

  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if (open) (
      setTimeout(() => write(defaultText), 2000)
    )
  }, [])

  useEffect(() => {

  })

  return (
    <Container id='about'>
      {open ?
          <CMD width={width} height={height}>
            <header>
              <div>
                <VscTerminalCmd size={16} />
                <h1>Sobre</h1>
              </div>
              <div>
                <Button onClick={handleOpen} color='#222'>
                  <IoRemoveOutline size={20} />
                </Button>
                <Button onClick={maximise} color='#222'>
                  <TiTabsOutline size={16} />
                </Button>
                <Button onClick={handleOpen} color='#f11'>
                  <IoCloseOutline size={20} />
                </Button>
              </div>
            </header>
            <Box spellCheck='false' autoFocus value={text} onChange={e => setText(e.target.value)} />
          </CMD>

        :
        <Icon onClick={handleOpen}>
          <HiCommandLine size={40} />
          <h1>sobre.cmd</h1>
        </Icon>
      }
    </Container>
  )
}