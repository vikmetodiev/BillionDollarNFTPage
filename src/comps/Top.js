import React, { useContext } from "react";
import { app } from "../firebase/config";
import { AuthContext } from "../Auth.js";
import { withRouter } from "react-router";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion";
import { Button } from "reactstrap";

const Top = ({ history }) => {
  const { docs } = useFirestore("images");
  const { currentUser } = useContext(AuthContext);
  docs.sort(function (a, b) {
    return b.likes - a.likes;
  });
  console.log(docs);
  return (
    <div className="App">
      <div className="title">
        {currentUser ? (
          <h6 className="float-right ml-5">
            {" "}
            Hello, {currentUser?.email},{" "}
            <a onClick={() => app.auth().signOut()} href="">
              Sign Out
            </a>
          </h6>
        ) : (
          <h6 className="float-right ml-5">
            <Button
              onClick={() => history.push("/login")}
              className="m-2 login"
            >
              Log in
            </Button>
            <Button onClick={() => history.push("/Sign")} className="m-2 login">
              Register
            </Button>
          </h6>
        )}
        <h2>Top Images</h2>
        <p>Here you can find the 10 most liked images on the platform</p>
        <div
          className="galery-grid"
          style={{ gridTemplateColumns: "1fr 1fr 1fr", pointerEvents: "none" }}
        >
          {docs &&
            docs.slice(0, 10).map((doc) => (
              <motion.div
                className="img-wrap"
                key={doc.id}
                layout
                style={{ opacity: 1 }}
                whileHover={{ opacity: 1 }}
              >
                <motion.img
                  src={doc.url}
                  alt="uploaded pic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default withRouter(Top);
