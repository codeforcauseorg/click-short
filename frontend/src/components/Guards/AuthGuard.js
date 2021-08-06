import React, { useContext } from "react";
import { UserContext } from "../../context";
import { Redirect } from "react-router-dom";

function AuthGuard({children}) {
    let {user} =  useContext(UserContext)
    if (user === undefined) {
        return (
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          > Loading ...</div>
        );
      } else if (user === null) {
        return <Redirect to="/login" />;
      } else {
        return children;
      }
}

export default AuthGuard;
