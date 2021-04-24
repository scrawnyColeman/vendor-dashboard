import React from 'react'
import { navLinks } from '../data/navLinks'

const SideBarBody: React.FC = (): JSX.Element => {
  return (
    <div className="side-bar-body">
      {navLinks.map((link: navLink) => {
        const { path, label, icon } = link
        return (
          <div key={path}>
            <div>{icon}</div>
            <div>{label}</div>
          </div>
        )
      })}
    </div>
  )
}

export default SideBarBody
