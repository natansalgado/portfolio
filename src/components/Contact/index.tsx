import { useEffect, useRef, useState, KeyboardEvent } from 'react'
import { Container, Button, Body, Header, Content, Footer } from './styles'
import { IoCloseOutline, IoRemoveOutline } from 'react-icons/io5'
import { TiTabsOutline } from 'react-icons/ti'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

import Draggable, { DraggableData, DraggableEvent } from 'react-draggable'

import { useDispatch } from 'react-redux'
import { closeContact, activeContact } from '../../store/desktopSlice'

import { useSelector } from 'react-redux'
import { desktop } from '../../store/desktopSlice'
import { MdCropSquare } from 'react-icons/md'

interface Props {
  isDesktop: boolean
  windowSize: { width: number, height: number }
}

export const Contact = ({ isDesktop, windowSize }: Props) => {
  const [windowHeight, setWindowHeight] = useState(windowSize.height)
  const [windowWidth, setWindowWidth] = useState(windowSize.width)

  const { actived } = useSelector(desktop)
  const dispatch = useDispatch()
  const scrollRef = useRef<HTMLDivElement | null>(null)

  const [fullScreen, setFullScreen] = useState(false)
  const [position, setPosition] = useState({
    x: isDesktop ? (windowWidth - ((80 / 100) * windowWidth)) / 2 : 0,
    y: isDesktop ? (windowHeight - ((80 / 100) * windowHeight)) / 2 - 25 : 0
  })

  const [chat, setChat] = useState('')
  const [chatArray, setChatArray] = useState<string[]>([])

  const handleClose = () => {
    dispatch(closeContact())
  }

  const handleActived = () => {
    dispatch(activeContact())
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

  const submit = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      if (chat) {
        setChatArray(prev => [...prev, chat])
        setChat('')
        setTimeout(() => {
          scrollRef.current?.scroll(0, scrollRef.current?.scrollHeight)
        })
      }
    }
  }

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
      <Container onClick={handleActived} fullScreen={fullScreen} isDesktop={isDesktop} className={actived === 'contact' ? 'actived' : ''}>
        <div className='header' >
          <div className='handle' />
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
        <Body>
          <Header>
            <img src="https://github.com/natansalgado.png" alt="Avatar de Natan" />
            <div className='status'>
              <h1>Natan Salgado</h1>
              <p>online</p>
            </div>
          </Header>
          <Content ref={scrollRef}>
            <div className='my-message'>
              <div className='point' />
              Olá!
            </div>
            <div className='my-message'>
              <div className='point' />
              Obrigado por ter dedicado seu tempo para ver meu portfólio.
              Significa muito para mim que você tenha se interessado em conhecer meu trabalho.
            </div>
            <div className='my-message'>
              <div className='point' />
              Espero que tenha gostado. Se tiver alguma dúvida ou quiser discutir uma possível colaboração, fique à vontade para entrar em contato comigo.
            </div>
            <div className='my-message'>
              <div className='point' />
              Formas de contato
              <div className='buttons'>
                <a href="https://github.com/natansalgado" target='_blank'>
                  <button className='git'>
                    <BsGithub size={20} /> github
                  </button>
                </a>
                <a href="https://www.linkedin.com/in/natan-salgado/" target='_blank'>
                  <button>
                    <BsLinkedin size={20} /> linkedin
                  </button>
                </a>
              </div>
            </div>
            <div className='user-message-div'>
              {chatArray.map((message, index) =>
                <div key={index} className='user-message'>
                  <div className='point' />
                  {message}
                </div>
              )}
            </div>
          </Content>
          <Footer>
            <input onKeyDown={submit} value={chat} onChange={e => setChat(e.target.value)} type="text" autoFocus placeholder='Digite uma mensagem' />
          </Footer>
        </Body>
      </Container >
    </Draggable>
  )
}