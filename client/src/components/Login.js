import React, { useState } from "react";
import axiosWithAuth from "./axiosWithAuth";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    username: "Lambda School",
    password: "i<3Lambd4",
  });
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const inputHandler = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("./api/login", credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        props.history.push("/BubblePage");
      })
      .catch((err) =>
        console.log("error happend wih the post request to API", err)
      );
  };
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>

      <form onSubmit={login}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          value={credentials.username}
          onChange={inputHandler}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={credentials.password}
          onChange={inputHandler}
        />
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;
