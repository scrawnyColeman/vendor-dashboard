import React from 'react'
import SideBarBody from '../SideBarBody'
import SideBarHeader from '../SideBarHeader'
import logo from '../../../assets/images/urbanbrews.png'
import '../scss/style.scss'

const SideBar: React.FC = (): JSX.Element => {
  return (
    <div className="side-bar-container">
      <SideBarHeader title="Urban Brews" icon={logo} />
      <SideBarBody />
    </div>
  )
}

export default SideBar
