import GlobalStyle from './styles/global'
import { Header } from './components/Header'
import { About } from './components/About'
import { Projects } from './components/Projectsda'
import { Contacts } from './components/Contacts'
import { Resizer } from './components/Resizer'

function App() {


  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contacts />
      <GlobalStyle />
    </div>
  )
}

export default App
