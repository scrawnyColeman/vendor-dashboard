import { FaHome, FaCoins } from 'react-icons/fa'

export const navLinks: navLink[] = [
  {
    path: '/home',
    label: 'Home',
    icon: <FaHome height="24" width="32" />,
  },
  {
    path: '/payments',
    label: 'Payments',
    icon: <FaCoins height="24" width="32" />,
  },
]
