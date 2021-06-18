import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { app } from "../firebase/config";
import { AuthContext } from "../Auth.js";
import { Button, Form, FormGroup, Input } from "reactstrap";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="m-5 px-5 container text-center">
      <h1 style={{marginTop:60}}>Log in</h1>
      <Form onSubmit={handleLogin}>
        <div className=" justify-content-center">
          <FormGroup className="d-flex justify-content-center">
            <h2 style={{marginRight:50}}>Email </h2>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
              style={{width:300}}
            />
          </FormGroup>
          <FormGroup className="d-flex justify-content-center m-3">
            <h2 style={{marginRight:40,marginLeft:-26}}>Password </h2>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
              style={{width:300}}
            />
          </FormGroup>
        </div>
        <Button type="submit" className="m-2 login">
          Log in{" "}
        </Button>
        <Button onClick={() => history.push("/Sign")} className="m-2 login">
          Register
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(Login);
