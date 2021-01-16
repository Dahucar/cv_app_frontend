import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import { DashboardScreen } from '../dashboard/DashboardScreen'; 
import { WellcomeScreen } from '../landing/WellcomeScreen';
import { LoginScreen } from '../public/LoginScreen';

// TODO: REORGANIZAR LAS RUTAS DE /DASHBOARD
// TODO: DEFINIR RUTAS PRIVADAS Y PUBLICAS
export const AppRouter = () => {
    return (
        <Router>
          <div>
            <Switch>
              <Route path="/dashboard" component={ DashboardScreen } />
              <Route exact path="/login" component={ LoginScreen } />
              <Route exact path="/" component={ WellcomeScreen } />
              <Redirect to="/" />
            </Switch>
          </div>
        </Router>
    )
}
