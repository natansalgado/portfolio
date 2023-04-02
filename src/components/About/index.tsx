import { useEffect, useState } from 'react'
import { Container, Button, Box } from './styles'
import { IoCloseOutline, IoRemoveOutline } from 'react-icons/io5'
import { VscTerminalCmd } from 'react-icons/vsc'
import { TiTabsOutline } from 'react-icons/ti'

import Draggable, { DraggableData, DraggableEvent } from 'react-draggable'

import { useDispatch } from 'react-redux'
import { closeAbout, activeAbout } from '../../store/desktopSlice'

import { useSelector } from 'react-redux'
import { desktop } from '../../store/desktopSlice'
import { MdCropSquare } from 'react-icons/md'

interface Props {
  isDesktop: boolean
  windowSize: { width: number, height: number }
}

const defaultText = `Olá, meu nome é Natan Salgado,
tenho 20 anos e sou desenvolvedor frontend.
    
Minha primeira interação com programação aconteceu entre os meus 15 e os 16 anos.
Aprendi o básico, mas logo deixei para lá...
  
Entretanto, em junho de 2022, fui atraído novamente e desde então tenho me interessado cada vez mais pela área.
  
Atualmente, domino mais a área do Frontend,
mas tenho bastante interesse em aprender mais sobre Backend futuramente.

>`

export const About = ({ isDesktop, windowSize }: Props) => {
  const [windowHeight, setWindowHeight] = useState(windowSize.height)
  const [windowWidth, setWindowWidth] = useState(windowSize.width)

  const { actived } = useSelector(desktop)

  const dispatch = useDispatch()

  const [text, setText] = useState('')
  const [fullScreen, setFullScreen] = useState(false)
  const [position, setPosition] = useState({
    x: isDesktop ? (windowWidth - ((80 / 100) * windowWidth)) / 2 : 0,
    y: isDesktop ? (windowHeight - ((80 / 100) * windowHeight)) / 2 - 25 : 0
  })


  const write = (text: string, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1))
      setTimeout(() => write(text, i + 1), 70)
    }
  }

  const handleClose = () => {
    dispatch(closeAbout())
  }

  const handleActived = () => {
    dispatch(activeAbout())
  }

  const handleFullScreen = () => {
    setFullScreen(!fullScreen)
    if (!fullScreen) {
      setPosition({ x: 0, y: 0 })
    } else {
      setPosition({
        x: isDesktop ? (windowWidth - ((80 / 100) * windowWidth)) / 2 : 0,
        y: isDesktop ? (windowHeight - ((80 / 100) * windowHeight)) / 2 - 25 : 0
      })
    }
  }

  const handleOnStop = (e: DraggableEvent, data: DraggableData) => {
    if (!fullScreen) {
      setPosition({ x: data.x, y: data.y })
    }
  }

  useEffect(() => {
    setTimeout(() => write(defaultText), 1000)
  }, [])

  useEffect(() => {
    setWindowHeight(windowSize.height)
    setWindowWidth(windowSize.width)
    !fullScreen && setPosition({
      x: isDesktop ? (windowWidth - ((80 / 100) * windowWidth)) / 2 : 0,
      y: isDesktop ? (windowHeight - ((80 / 100) * windowHeight)) / 2 - 50 : 0
    })
  }, [windowSize])

  return (
    <Draggable
      axis="both"
      handle=".handle"
      scale={1}
      bounds={isDesktop ? fullScreen ?
        { left: 0, top: 0, right: 0, bottom: 0 }
        :
        { left: 0, top: 0, right: windowWidth - ((80 / 100) * windowWidth), bottom: (windowHeight - ((80 / 100) * windowHeight)) - 50 }
        :
        { left: 0, top: 0, right: 0, bottom: 0 }
      }
      onStart={handleActived}
      onStop={handleOnStop}
      position={isDesktop ? position : { x: 0, y: 0 }}
    >
      <Container onClick={handleActived} fullScreen={fullScreen} isDesktop={isDesktop} className={actived === 'about' ? 'actived' : ''}>
        <div className='header' >
          <div className='handle'>
            <VscTerminalCmd size={16} />
            <h1>sobre mim.cmd</h1>
          </div>
          <div>
            {isDesktop &&
              <>
                <Button onClick={handleClose} color='#fff1'>
                  <IoRemoveOutline size={20} />
                </Button>
                <Button onClick={handleFullScreen} color='#fff1'>
                  {fullScreen ?
                    <TiTabsOutline size={16} />
                    :
                    <MdCropSquare size={16} />
                  }
                </Button>
              </>
            }
            <Button onClick={handleClose} color='#900'>
              <IoCloseOutline size={20} />
            </Button>
          </div>
        </div >
        <Box spellCheck='false' autoFocus value={text} onChange={e => setText(e.target.value)} />
      </Container >
    </Draggable>
  )
}