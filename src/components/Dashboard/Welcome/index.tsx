import React from 'react'
import '../scss/style.scss'
import { FaArrowRight } from 'react-icons/fa'

const Welcome: React.FC = (): JSX.Element => {
  return (
    <div className="dashboard-page-welcome">
      <div>
        <h2>Welcome aboard, Thomas</h2>
      </div>
      <div className="dashboard-page-api-keys">
        <FaArrowRight /> Find your API keys or start taking payments in person
        now
      </div>
    </div>
  )
}

export default Welcome
