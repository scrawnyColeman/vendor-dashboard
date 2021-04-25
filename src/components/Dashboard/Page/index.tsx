import React from 'react'
import AnalyticsCards from '../AnalyticsCards'
import '../scss/style.scss'
import SearchBar from '../SearchBar'
import UsersGrid from '../UsersGrid'
import Welcome from '../Welcome'

const DashboardPage: React.FC = (): JSX.Element => {
  return (
    <div className="dashboard-page-container">
      <SearchBar />
      <Welcome />
      <AnalyticsCards />
      <UsersGrid />
    </div>
  )
}

export default DashboardPage
