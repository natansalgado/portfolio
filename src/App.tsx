import GlobalStyle from './styles/global'
import { Toolbar } from './components/Toolbar'
import { Desktop } from './components/Desktop'

function App() {


  return (
    <div className="App">
      <Desktop />
      <Toolbar />
      <GlobalStyle />
    </div>
  )
}

export default App
