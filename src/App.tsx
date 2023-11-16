
import { useState } from 'react'
import './App.css'
import Improvement from './models/Improvement'
import ResourcesView from './components/ResourcesView/ResourcesView'
import Map from './components/Map/Map'

function App() {
const [structures, setStructures] = useState<Improvement[]>([
  {
    type: "Research Lab",
    level: 1,
  },
  {
    type: "Rocket",
    level: 1,
  },
  {
    type: "Observatory",
    level: 1,
  },
  {
    type: "Launchpad",
    level: 1,
  },
  {
    type: "Space Station",
    level: 1,
  }

])

  return (
    <div className='App'>
      <header>
        <h1>Space Colony</h1>
      </header>
    <Map structures={structures}/>
    <ResourcesView />
    </div>
  )
}

export default App
