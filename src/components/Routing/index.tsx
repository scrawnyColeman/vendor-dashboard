import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import PaymentsPage from '../Payments/Page'
import DashboardPage from '../Dashboard/Page'

const Routing: React.FC = (): JSX.Element => {
  return (
    <Switch>
      <Route
        exact
        path={['/', '/home', '/dashboard']}
        component={DashboardPage}
      />
      <Route exact path="/payments" component={PaymentsPage} />
      <Redirect to="/home" />
    </Switch>
  )
}

export default Routing
