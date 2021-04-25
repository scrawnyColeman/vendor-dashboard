import React from 'react'
import Card from '../../UI/Card'
import { cardData } from './data/cardData'

const AnalyticsCards: React.FC = (): JSX.Element => {
  return (
    <div className="dashboard-page-cards">
      {cardData.map((data) => {
        const { header, body, size, icon } = data
        return (
          <Card
            header={header}
            size={size}
            icon={icon}
            key={`analytics-cards-${header}`}
          >
            {body}
          </Card>
        )
      })}
    </div>
  )
}

export default AnalyticsCards
