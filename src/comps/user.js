import React, { useState, useContext } from "react";
import Favorites from "./favorites";
import ModalFav from "./ModalFav";
import { AuthContext } from "../Auth.js";
import { app } from "../firebase/config";
import { withRouter } from "react-router";
import { Button } from "reactstrap";

function User({ history }) {
  const { currentUser } = useContext(AuthContext);

  const [selectedImg, setSelectedImg] = useState(null);
  return !currentUser ? (
    <div className="App text-center" style={{marginTop:15}}>
      <h2>
        You are not currently logged in, please Login to view the user panel
      </h2>
    </div>
  ) : (
    <div className="App text-center">
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
      <h1 style={{ marginTop: 60 }}>User Panel</h1>
      <h2>User: {currentUser?.email}</h2>
      <h3>Favorite Images</h3>
      <Favorites setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <ModalFav selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default withRouter(User);
