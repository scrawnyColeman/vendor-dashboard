import React from 'react'
import '../scss/style.scss'
import UsersGrid from '../UsersGrid'

const PaymentsPage: React.FC = (): JSX.Element => {
  return (
    <div className="payments-page-container">
      <div className="payments-page-search-bar">Search</div>
      <div className="payments-page-welcome">Welcome</div>
      <div className="payments-page-cards">Cards</div>
      <UsersGrid />
    </div>
  )
}

export default PaymentsPage
