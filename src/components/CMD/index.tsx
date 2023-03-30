import { useEffect, useState } from 'react'
import { Container, Button, Box } from './styles'
import { IoCloseOutline, IoRemoveOutline } from 'react-icons/io5'
import { VscTerminalCmd } from 'react-icons/vsc'
import { TiTabsOutline } from 'react-icons/ti'

import { NodeProps, NodeResizer } from 'reactflow'

import '@reactflow/node-resizer/dist/style.css'
import { IconCMD } from '../IconCMD'

export const CMD = (props: NodeProps) => {
  const defaultText = 'aaaaaaaaa aaaaaaaaaaaaaa'

  const [resize, setResize] = useState(false)
  const [open, setOpen] = useState(true)
  const [text, setText] = useState('')

  const write = (text: string, i = 0) => {
    if (i < text.length) {
      setText(text.slice(0, i + 1))
      setTimeout(() => write(text, i + 1), 70)
    }
  }

  const maximise = () => {

  }

  const handleOpen = () => {
    setOpen(!open)
  }

  useEffect(() => {
    if (open) (
      setTimeout(() => write(defaultText), 1000)
    )
  }, [])

  return (
    <>{
      open ?
        <Container resize={resize}>
          <NodeResizer
            onResize={() => setResize(true)}
            minWidth={270}
            minHeight={200}
            maxWidth={1280}
            maxHeight={720}
            isVisible={true}
            lineStyle={{ border: '5px transparent solid' }
            }
            handleStyle={{ height: '5px', width: '5px', border: 'none', background: 'transparent' }}
          />
          < header >
            <div className='draghandle'>
              <VscTerminalCmd size={16} />
              <h1>Sobre mim.cmd</h1>
            </div>
            <div>
              <Button color='#222'>
                <IoRemoveOutline size={20} />
              </Button>
              <Button color='#222'>
                <TiTabsOutline size={16} />
              </Button>
              <Button onClick={handleOpen} color='#900'>
                <IoCloseOutline size={20} />
              </Button>
            </div>
          </header >
          <Box spellCheck='false' autoFocus value={text} onChange={e => setText(e.target.value)} />
        </Container >
        :
        <IconCMD onClick={handleOpen} />

    }
    </>
  )
}