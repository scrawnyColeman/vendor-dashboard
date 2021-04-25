import React from 'react'
import SideBar from '../Navigation/SideBar'
import Routing from '../Routing'
import './scss/style.scss'

const App: React.FC = (): JSX.Element => {
  return (
    <>
      <SideBar />
      <div className="main-container">
        <Routing />
      </div>
    </>
  )
}

export default App
