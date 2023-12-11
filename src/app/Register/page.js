"use client";
import React, { useState } from "react";
import axios from "axios";
import "../globals.css";
const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleApi = () => {
    console.log("Email:- " + email, "Password:- " + password);

    axios
      .post("https://reqres.in/api/register", {
        email: email, //eve.holt@reqres.in NEED this TYPE of Email then u get TOKen
        password: password,
      })
      .then((result) => {
        console.log(result.data);
        alert("Successfully SignUP");
      })
      .catch((err) => {
        console.log(err);
        alert("Server error enter in this formate eve.holt@reqres.in");
      });
  };

  return (
    <div>
      <h1>SIGN UP</h1>
      Email: <input onChange={handleEmail} value={email}></input>
      Password: <input onChange={handlePassword} value={password} />
      <button onClick={handleApi}>Register</button>
    </div>
  );
};
export default RegisterPage;
