import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import HomePage from '../Home/Page'
import PaymentsPage from '../Payments/Page'

const Routing: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route exact path={['/', '/home', '/dashboard']} component={HomePage} />
      <Route exact path="/payments" component={PaymentsPage} />
      <Redirect to="/home" />
    </Switch>
  )
}

export default Routing
