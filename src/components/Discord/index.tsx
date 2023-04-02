import { useRef, useState } from 'react'
import { Container, Button, Box, Column, Content, Project, Footer } from './styles'
import { IoCloseOutline, IoRemoveOutline } from 'react-icons/io5'
import { BsGithub, BsPlayFill } from 'react-icons/bs'
import { TiTabsOutline } from 'react-icons/ti'
import { MdCropSquare } from 'react-icons/md'

import Draggable from 'react-draggable'

import { useDispatch, useSelector } from 'react-redux'
import { handleProjects, activeProjects, setProject, desktop } from '../../store/desktopSlice'

import { projects } from '../../apis/projects'

export const Discord = () => {
  const [windowHeight] = useState(window.innerHeight)
  const [windowWidth] = useState(window.innerWidth)

  const { actived, project } = useSelector(desktop)
  const dispatch = useDispatch()

  const scrollRef = useRef<HTMLDivElement>(null)
  const [chat, setChat] = useState('')
  const [chatArray, setChatArray] = useState<string[]>([])

  const [isDesktop] = useState(windowWidth >= 720 ? true : false)
  const [fullScreen, setFullScreen] = useState(false)
  const [position, setPosition] = useState({
    x: isDesktop ? (windowWidth - ((80 / 100) * windowWidth)) / 2 : 0,
    y: isDesktop ? (windowHeight - ((80 / 100) * windowHeight)) / 2 - 50 : 0
  })

  const handleClose = () => {
    dispatch(handleProjects())
  }

  const handleActived = () => {
    dispatch(activeProjects())
  }

  const handleProject = (index: number) => {
    dispatch(setProject(index))
    setChatArray([])
    scrollRef.current?.scroll(0, 0)
  }

  const handleFullScreen = () => {
    setFullScreen(!fullScreen)
    if (!fullScreen) {
      setPosition({ x: 0, y: 0 })
    } else {
      setPosition({
        x: isDesktop ? (windowWidth - ((80 / 100) * windowWidth)) / 2 : 0,
        y: isDesktop ? (windowHeight - ((80 / 100) * windowHeight)) / 2 - 50 : 0
      })
    }
  }

  const handleDrag = (e: any, data: any) => {
    if (!fullScreen) {
      setPosition({ x: data.x, y: data.y })
    }
  }

  const submit = (e: any) => {
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

  return (
    <Draggable
      axis="both"
      handle=".handle"
      scale={1}
      bounds={isDesktop ? fullScreen ?
        { left: 0, top: 0, right: 0, bottom: 0 }
        :
        { left: 0, top: 0, right: windowWidth - ((80 / 100) * windowWidth), bottom: (windowHeight - ((80 / 100) * windowHeight)) - 80 }
        :
        { left: 0, top: 0, right: 0, bottom: 0 }
      }
      onStart={handleActived}
      onStop={handleDrag}
      position={isDesktop ? position : { x: 0, y: 0 }}
    >
      <Container onClick={handleActived} fullScreen={fullScreen} isDesktop={isDesktop} className={actived === 'projects' ? 'actived' : ''}>
        <header >
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
        </header >
        <Box>
          <Column>
            <header>
              <h1>Projetos</h1>
            </header>
            <div className='column-items'>
              {projects.map((project, index) =>
                <Project onClick={() => handleProject(index)} projectOn={project.on} key={index}>
                  <div className='image'>
                    <img src={project.image} alt={`imagem do projeto ${project.title}`} />
                    <div className='circle'>
                      {!project.on &&
                        <div className='small-circle' />
                      }
                    </div>
                  </div>
                  <p>{project.title}</p>
                </Project>
              )}
            </div>
          </Column>

          <Content>
            {project !== null ?
              <>
                <header>
                  <h1>{projects[project].title}</h1>
                </header>
                <div ref={scrollRef} className='body'>
                  {project < 2 &&
                    <div className='section first'>imagens de exemplo</div>
                  }
                  {projects[project].images.map((image, index) =>
                    <img key={index} src={image} alt={`Imagem de exemplo de ${projects[project].title}`} />
                  )
                  }
                  {project < 2 &&
                    <div className='section'>resumo sobre a aplicação</div>
                  }
                  <p>{projects[project].description}</p>
                  {project < 2 &&
                    <div className='section'>tecnologias utilizadas</div>
                  }
                  <ul>{projects[project].techs.map((tech, index) =>
                    <li key={index}>{tech}</li>
                  )}
                  </ul>
                  {project < 2 &&
                    <div className='section'>caso queira saber mais detalhes ou testar</div>
                  }
                  {project < 2 &&
                    <div className='buttons'>
                      <a target='_blank' href={projects[project].repo}>
                        <button><BsGithub size={20} />Repositório</button>
                      </a>
                      <a target='_blank' href={projects[project].test}>
                        <button className='second-button'><BsPlayFill size={20} />Testar</button>
                      </a>
                    </div>
                  }
                  {chatArray.map((message, index) =>
                    <p key={index}>{message}</p>
                  )}
                  <div />
                </div>
              </>
              :
              <>
                <header>
                  <h1>início</h1>
                </header>
                <div className='body'>
                  <p>clique em um projeto para exibir...</p>
                  {chatArray.map((message, index) =>
                    <p key={index}>{message}</p>
                  )}
                  <div />
                </div>
              </>
            }
            <Footer>
              <input onKeyDown={submit} value={chat} onChange={e => setChat(e.target.value)} type="text" autoFocus placeholder='Digite uma mensagem' />
            </Footer>
          </Content>
        </Box>
      </Container >
    </Draggable>
  )
}