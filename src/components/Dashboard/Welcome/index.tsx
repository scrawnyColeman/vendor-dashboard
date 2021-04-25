import React, { useState } from 'react'
import '../scss/style.scss'
import { FaArrowDown, FaArrowRight } from 'react-icons/fa'

const Welcome: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const toggleOpen = (): void => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="dashboard-page-welcome">
      <div>
        <h2>Welcome aboard, Thomas</h2>
      </div>
      <div className="dashboard-page-api-keys">
        <div
          role="button"
          tabIndex={0}
          onKeyDown={toggleOpen}
          onClick={toggleOpen}
          className="dashboard-page-api-keys-header"
        >
          {isOpen ? <FaArrowDown /> : <FaArrowRight />}
          <p>Find your API keys or start taking payments in person now</p>
        </div>
        {isOpen && (
          <div className="dashboard-page-api-keys-body">Some information</div>
        )}
      </div>
    </div>
  )
}

export default Welcome
