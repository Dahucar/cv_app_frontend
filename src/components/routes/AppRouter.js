import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ckeckingAction } from "../../actions/authActions";
import { DashboardScreen } from "../dashboard/DashboardScreen";
import { WellcomeScreen } from "../landing/WellcomeScreen";
import { LoadingScreen } from "../public/LoadingScreen";
import { LoginScreen } from "../public/LoginScreen";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, user } = useSelector(state => state.auth);
  useEffect(() => {
    console.log('estamos verificando su sesión');
    dispatch( ckeckingAction() );
  }, [ dispatch ]); 

  if ( checking ) {
      return (
        <LoadingScreen />
      )
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={ WellcomeScreen } />
          {/* Si checking esta a true. Es por que estoy sin logear */}
          <PublicRoute
            isAuthenticated={!!user}
            exact
            path="/login"
            component={LoginScreen}
          />

          {/* Si checking esta a false. Es por que estoy logeado */}
          <PrivateRoute
            isAuthenticated={!!user}
            path="/dashboard"
            component={DashboardScreen}
          />
          {/* 
            <Route path="/dashboard" component={ DashboardScreen } />
            <Route exact path="/login" component={ LoginScreen } />
            <Route exact path="/" component={ WellcomeScreen } />
            <Redirect to="/" /> 
          */}
        </Switch>
      </div>
    </Router>
  );
};
