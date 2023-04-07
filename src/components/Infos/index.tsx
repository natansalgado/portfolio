import { useEffect, useState } from 'react'
import { Container, Button, Box } from './styles'
import { IoCloseOutline, IoRemoveOutline } from 'react-icons/io5'
import { TiTabsOutline } from 'react-icons/ti'
import { MdCropSquare } from 'react-icons/md'

import Draggable, { DraggableData, DraggableEvent } from 'react-draggable'

import { useDispatch, useSelector } from 'react-redux'
import { desktop, closeInfos, activeInfos } from '../../store/desktopSlice'


interface Props {
  isDesktop: boolean
  windowSize: { width: number, height: number }
}

export const Infos = ({ isDesktop, windowSize }: Props) => {
  const [windowHeight, setWindowHeight] = useState(windowSize.height)
  const [windowWidth, setWindowWidth] = useState(windowSize.width)

  const { actived } = useSelector(desktop)

  const dispatch = useDispatch()

  const [fullScreen, setFullScreen] = useState(false)
  const [position, setPosition] = useState({
    x: isDesktop ? (windowWidth - ((80 / 100) * windowWidth)) / 2 : 0,
    y: isDesktop ? (windowHeight - ((80 / 100) * windowHeight)) / 2 - 25 : 0
  })

  const handleClose = () => {
    dispatch(closeInfos())
  }

  const handleActived = () => {
    dispatch(activeInfos())
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
      <Container onClick={handleActived} fullScreen={fullScreen} isDesktop={isDesktop} className={actived === 'infos' ? 'actived' : ''}>
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
        <Box >
          <div className='header-2'>
            <p>INFORMAÇÕES, INTERAÇÕES POSSÍVES E SISTEMAS QUE FORAM IMPLEMENTADOS NA APLICAÇÃO </p>
          </div>
          <div className='content'>
            <div className='desktop'>
              <p>ÁREA DE TRABALHO</p>
              <ul>
                <li>MOVER ÍCONES (CONTÉM SISTEMA DE COLISÃO PARA QUE UM ÍCONE NÃO SOBREPONHA O OUTRO).</li>
                <li>AO CLICAR EM UM DOS ÍCONES, ABRE-SE UMA JANELA.</li>
                <li>DEPENDENDO DO TAMANHO DA TELA, OS ICONES NÃO IRÃO APARECER (SOMENTE NA BARRA DE TAREFAS).</li>
                <li>É POSSÍVEL ALTERAR O WALLPAPER NA JANELA DE CONFIGURAÇÕES.</li>
              </ul>
            </div>

            <div className='taskbar'>
              <p>BARRA DE TAREFAS</p>
              <ul>
                <li>AO CLICAR EM UM DOS ATALHOS, ABRE-SE UMA JANELA.</li>
                <li>APARECE UM INDICADOR CASO A JANELA ESTEJA ABERTA.</li>
                <li>CASO A JANELA ESTIVER ABERTA EM SEGUNDO PLANO, AO CLICAR NO ATALHO, ELA SE MOVERÁ PARA O PRIMEIRO PLANO.</li>
                <li>QUANDO A JANELA ESTIVER ABERTA EM PRIMEIRO PLANO OU SÓ ESTIVER ELA ABERTA, SERÁ FECHADA AO CLICAR NO ATALHO.</li>
                <li>É POSSÍVEL MUDAR A COR DA BARRA DE TAREFAS NA JANELA DE CONFIGURAÇÕES.</li>
              </ul>
            </div>

            <div className='windows'>
              <p>JANELAS EM GERAL</p>
              <ul>
                <li>AO CLICAR NO <IoCloseOutline /> OU <IoRemoveOutline /> NO CANTO SUPERIOR DIREITO, A PÁGINA SERÁ FECHADA.</li>
                <li>AO CLICAR NO <MdCropSquare /> OU <TiTabsOutline /> A JANELA SERÁ MAXIMIZADA OU MINIMIZADA.</li>
                <li>DEPENDENDO DO TAMANHO DA TELA, NÃO SERÁ POSSÍVEL MINIMIZAR A JANELA.</li>
                <li>É POSSÍVEL ARRASTAR A JANELA PELA TELA CASO ESTEJA MINIMIZADA.</li>
              </ul>
            </div>

            <div className='about'>
              <p>SOBRE MIM</p>
              <ul>
                <li>O ESTILO DA JANELA FOI BASEADO NO PROMPT DE COMANDOS.</li>
                <li>HÁ ALGUMAS INFORMAÇÕES SOBRE MIM.</li>
                <li>É POSSÍVEL DIGITAR LIVREMENTE.</li>
              </ul>
            </div>

            <div className='projects'>
              <p>PROJETOS</p>
              <ul>
                <li>O ESTILO DA JANELA FOI BASEADO NO DISCORD.</li>
                <li>AO CLICAR EM UM PROJETO NA COLUNA DA ESQUERDA, SERÁ MOSTRADO ALGUMAS INFORMAÇÕES COMO IMAGENS DO FUNCIONAMENTO, UM BREVE RESUMO E TECNOLOGIAS QUE FORAM UTILIZADAS.</li>
                <li>AO CLICAR EM REPOSÍTORIO, SERÁ REDIRECIONADO AO REPOSITÓRIO DO GIT HUB.</li>
                <li>AO CLICAR EM TESTAR, ABRIRÁ A APLICAÇÃO NO GIT HUB PAGES.</li>
                <li>É POSSÍVEL ESCREVER MENSAGENS NO CHAT E ENVIAR PRESSIONANDO O ENTER</li>
              </ul>
            </div>

            <div className='contact'>
              <p>CONTATO</p>
              <ul>
                <li>O ESTILO DA JANELA FOI BASEADO NO WHATSAPP.</li>
                <li>HÁ INFORMAÇÕES DE COMO ENTRAR EM CONTATO COMIGO.</li>
                <li>É POSSÍVEL ESCREVER MENSAGENS E ENVIAR PRESSIONANDO O ENTER.</li>
              </ul>
            </div>

            <div className='configs'>
              <p>CONFIGURAÇÕES</p>
              <ul>
                <li>O ESTILO DA JANELA FOI BASEADO NA JANELA DE CONFIGURAÇÕES DO WINDOWS.</li>
                <li>É POSSÍVEL ENVIAR UM WALLPAPER.</li>
                <li>E ESCOLHER UMA COR PARA A BARRA DE TAREFAS.</li>
              </ul>
            </div>

            <div className='others'>
              <p>OUTRAS INFORMAÇÕES</p>
              <div className='tecnologies'>
                <p>TECNOLOGIAS UTILIZADAS NESSA APLICAÇÃO:</p>
                <span>REACT</span>
                <span>VITE</span>
                <span>TYPESCRIPT</span>
                <span>HTML</span>
                <span>REACT-REDUX</span>
                <span>REACT-ICONS</span>
                <span>REACT-DRAGGABLE</span>
                <span>STYLED-COMPONENTS</span>
                <span>GIT & GITHUB</span>
              </div>
            </div>
          </div>
        </Box>
      </Container >
    </Draggable >
  )
}
