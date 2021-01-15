import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { DashboardScreen } from '../dashboard/DashboardScreen'; 
import { WellcomeScreen } from '../landing/WellcomeScreen';

// TODO: REORGANIZAR LAS RUTAS DE /DASHBOARD
// TODO: DEFINIR RUTAS PRIVADAS Y PUBLICAS
export const AppRouter = () => {
    return (
        <Router>
          <div>
            <Switch>
              <Route path="/dashboard" component={ DashboardScreen } />
              <Route exact path="/" component={ WellcomeScreen } />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
    )
}
