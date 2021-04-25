import React from 'react'
import './style.scss'

export enum Sizes {
  small,
  medium,
  large,
  xl,
}

interface IProps {
  header: string | JSX.Element
  children: string | number | JSX.Element
  icon?: JSX.Element
  size?: Sizes
}

const SizeMap = {
  [Sizes.small]: 'small-card-container',
  [Sizes.medium]: 'medium-card-container',
  [Sizes.large]: 'large-card-container',
  [Sizes.xl]: 'xl-card-container',
}

const Card: React.FC<IProps> = ({
  header,
  children,
  icon,
  size = Sizes.small,
}): JSX.Element => (
  <div className={SizeMap[size]}>
    <div className="card">
      <div className={`card-content`}>
        <header className="card-header">
          <div className="card-header-label">{header}</div>
          {icon && <div className="card-header-icon">{icon}</div>}
        </header>
        <div className="card-body">{children}</div>
      </div>
    </div>
  </div>
)

export default Card
