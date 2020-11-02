import React from "react";
import { Route, RouteProps, Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const PrivateRoute: React.FC<RouteProps> = (props) => {
  //   const value = React.useContext(AuthContext);
  return (
    <div>
      <Route {...props}>
        <AuthContext.Consumer>
          {(value) => {
            console.log(value);
            return value.isLoggedIn ? props.children : <Redirect to="/" />;
          }}
        </AuthContext.Consumer>
      </Route>
    </div>
  );
};

export default PrivateRoute;
