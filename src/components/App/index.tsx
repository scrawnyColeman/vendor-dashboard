import React from 'react'
import { HashRouter as Router } from 'react-router-dom'
import SideBar from '../Navigation/SideBar'
import Routing from '../Routing'
import './scss/style.scss'

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <SideBar />
      <div className="main-container">
        <Routing />
      </div>
    </Router>
  )
}

export default App
