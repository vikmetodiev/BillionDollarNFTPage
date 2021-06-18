import React, { useContext } from "react";
import { AuthContext } from "../Auth.js";
import { app } from "../firebase/config";
import { withRouter } from "react-router";
import { Button } from "reactstrap";
const Title = ({ history }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="title">
      {currentUser ? (
        <h6 className="float-right ml-5">
          {" "}
          Hello, {currentUser?.email},{" "}
          <a onClick={() => app.auth().signOut()} >
            Sign Out
          </a>
        </h6>
      ) : (
        <h6 className="float-right ml-5">
          <Button onClick={() => history.push("/login")} className="m-2 login">
            Log in
          </Button>
          <Button onClick={() => history.push("/Sign")} className="m-2 login">
            Register
          </Button>
        </h6>
      )}
      <h2>Billion Dollars NFT Page</h2>
      <p>Add all your favorite pieces here!</p>
    </div>
  );
};

export default withRouter(Title);
