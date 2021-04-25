import { BiCoinStack } from 'react-icons/bi'
import { FaArrowAltCircleUp, FaUser } from 'react-icons/fa'
import { Sizes } from '../../../../constants/enums'

interface HomeCardData {
  header: string
  size: Sizes
  body: string | number | JSX.Element
  icon?: JSX.Element
}

export const cardData: HomeCardData[] = [
  {
    header: 'Monthly revenue',
    size: Sizes.small,
    body: '£23,420.95',
    icon: <FaArrowAltCircleUp color="green" />,
  },
  {
    header: 'Customers',
    size: Sizes.small,
    body: 824,
    icon: <FaUser color="purple" />,
  },
  {
    header: 'Transactions',
    size: Sizes.small,
    body: 1823,
    icon: <BiCoinStack color="gold" />,
  },
]
