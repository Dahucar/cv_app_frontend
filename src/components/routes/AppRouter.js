import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import { DashboardScreen } from '../dashboard/DashboardScreen';
import { WellcomeScreen } from '../landing/WellcomeScreen';

export const AppRouter = () => {
    return (
        <Router>
          <div>
            <Switch>
              <Route exact path="/dashboard" component={ DashboardScreen } />
              <Route exact path="/" component={ WellcomeScreen } />
            </Switch>
          </div>
        </Router>
    )
}
