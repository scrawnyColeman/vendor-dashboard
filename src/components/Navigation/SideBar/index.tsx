import React from 'react'
import { navLinks } from '../data/navLinks'

const SideBar: React.FC = (): JSX.Element => {
  return (
    <div>
      {navLinks.map((link: navLink) => {
        const { path, label, icon } = link
        return (
          <div key={path}>
            <div>{label}</div>
            <div>{icon}</div>
          </div>
        )
      })}
    </div>
  )
}

export default SideBar
