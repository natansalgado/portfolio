import { Container } from './styles'
import { CMD } from '../CMD'
import { IconCMD } from '../IconCMD'
import { Background } from '../BackGround'

import { useSelector } from 'react-redux';
import { about } from '../../store/aboutSlice';

import ReactFlow, { Node, useNodesState } from 'reactflow';
import 'reactflow/dist/style.css'

const windowHeight = window.innerHeight
const windowWidth = window.innerWidth

const NODE_TYPES = {
  cmd: CMD,
  icon: IconCMD,
  background: Background
}

const CMDNode = [{
  id: 'cmd',
  type: 'cmd',
  dragHandle: '.draghandle',
  position: {
    x: (windowWidth - ((80 / 100) * windowWidth)) / 2,
    y: ((windowHeight - ((80 / 100) * windowHeight)) / 2) - 50
  },
  data: {},
},
{
  id: 'icon',
  type: 'icon',
  position: {
    x: (windowWidth / 2) - 50,
    y: (windowHeight / 2) - 100
  },
  data: {},
},
{
  id: 'background',
  dragHandle: 'none',
  type: 'background',
  position: {x: 0, y: 0},
  data: {}
}
] satisfies Node[]

export const About = () => {
  const { open } = useSelector(about)
  const [nodes, setNodes, onNodesChange] = useNodesState(CMDNode)

  return (
    <Container id='about'>
      <ReactFlow
        zoomOnDoubleClick={false}
        zoomOnScroll={false}
        panOnDrag={false}
        nodeTypes={NODE_TYPES}
        nodes={open ? [nodes[2], nodes[0]] : [nodes[2], nodes[1]]}
        onNodesChange={onNodesChange}
        proOptions={{ hideAttribution: true }}
      >
      </ReactFlow>
    </Container>
  )
}