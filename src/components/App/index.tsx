import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routing from '../Routing'
import './scss/style.scss'

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <Routing />
    </Router>
  )
}

export default App
