import { useState, useEffect } from "react";
import styled from "styled-components";
const fcl: any = require("@onflow/fcl");

const Card = styled.div`
  margin: 10px 5px;
  padding: 10px;
  border: 1px solid #c0c0c0;
  border-radius: 5px;
`;

const SignInOutButton = ({ user: { loggedIn } }: any) => {
  const signInOrOut = async (event: any) => {
    event.preventDefault();

    if (loggedIn) {
      fcl.unauthenticate();
    } else {
      fcl.authenticate();
    }
  };

  return (
    <button onClick={signInOrOut}>
      {loggedIn ? "Sign Out " : "Sign In/Up"}
    </button>
  );
};

const CurrentUser = () => {
  const [user, setUser] = useState({});

  useEffect(
    () => fcl.currentUser().subscribe((user: any) => setUser({ ...user })),
    []);

    console.log({ user });

    return (
        <Card>
          <SignInOutButton user={user} />
        </Card>
      )
};

export default CurrentUser;
