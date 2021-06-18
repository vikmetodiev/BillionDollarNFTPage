import React, { useCallback } from "react";
import { withRouter } from "react-router";
import { app } from "../firebase/config";
import { Button, Form, FormGroup, Input } from "reactstrap";

const Sign = ({ history }) => {
  const handleSignUp = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .createUserWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div className="container px-5 m-5 text-center">
      <h1>Sign up</h1>
      <Form onSubmit={handleSignUp}>
        <div className=" justify-content-center">
          <FormGroup className="d-flex justify-content-center">
            <h2 style={{ marginRight: 50 }}>Email </h2>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="with a placeholder"
              style={{width:300}}
            />
          </FormGroup>
          <FormGroup className="d-flex justify-content-center m-3">
            <h2 style={{ marginRight: 40, marginLeft: -26 }}>Password </h2>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="password placeholder"
              style={{width:300}}
            />
          </FormGroup>
        </div>
        <Button type="submit" className="m-2 login" href="/login">
          Login
        </Button>
        <Button type="submit" className="m-2 login">
          Sign Up
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(Sign);
