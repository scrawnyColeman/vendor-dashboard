import React from 'react'

interface Props {
  title: string
  icon?: string
}

const SideBarHeader: React.FC<Props> = ({ title, icon }) => {
  return (
    <div className="side-bar-header-wrapper">
      {icon ? (
        <div className="side-bar-header-icon-wrapper">
          <img
            src={icon}
            alt="urban-brews"
            width="44"
            height="44"
            className="side-bar-logo-img"
          />
        </div>
      ) : (
        <div className="side-bar-header-icon-wrapper" />
      )}
      <div className="side-bar-header-company-name-wrapper">{title}</div>
    </div>
  )
}

export default SideBarHeader
