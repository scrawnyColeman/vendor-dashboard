import React from 'react'
import { Hierarchy, Sizes } from '../../../constants/enums'
import './style.scss'

interface Props {
  size: Sizes
  hierarchy: Hierarchy
  handleClick: () => void
  label: string
}

const SizeMap = {
  [Sizes.small]: 'small-btn',
  [Sizes.medium]: 'medium-btn',
  [Sizes.large]: 'large-btn',
  [Sizes.xl]: 'xl-btn',
}

const HierarchyMap = {
  [Hierarchy.primary]: 'primary-btn',
  [Hierarchy.secondary]: 'secondary-btn',
}

const Button: React.FC<Props> = ({
  size,
  hierarchy,
  handleClick,
  label,
}): JSX.Element => {
  return (
    <button
      className={`${SizeMap[size]} ${HierarchyMap[hierarchy]} btn`}
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export default Button
