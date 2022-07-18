import React from "react";
import { useNavigate } from "react-router";

import { auth } from "../../firebase";

const Home = () => {
  const navigate = useNavigate();
  const sigOut = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div>
      Home
      <button onClick={sigOut}>Sign out</button>
    </div>
  );
};

export default Home;
