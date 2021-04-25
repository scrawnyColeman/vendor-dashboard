import React from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from '../data/navLinks'
import '../scss/style.scss'

const SideBarBody: React.FC = (): JSX.Element => {
  return (
    <div className="side-bar-body">
      {navLinks.map((link: navLink) => {
        const { path, label, icon } = link
        return (
          <div className="side-bar-link-wrapper" key={path}>
            <NavLink
              to={path}
              activeClassName="active-link"
              className="side-bar-link"
            >
              <div className="side-bar-link-icon">{icon}</div>
              <div className="side-bar-link-label">{label}</div>
            </NavLink>
          </div>
        )
      })}
    </div>
  )
}

export default SideBarBody
