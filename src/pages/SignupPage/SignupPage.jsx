import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

import userService from "../../utils/userService";
import { useNavigate } from "react-router-dom";
import "./SignupPage.css"

function isPasswordMatch(passwordOne, passwordConf) {
  return passwordOne === passwordConf;
}

export default function SignUpPage(props) {
  const [error, setError] = useState({
    message: "",
    passwordError: false,
  });

  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
    bio: "",
  });

  const [selectedFile, setSelectedFile] = useState("");

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!isPasswordMatch(state.password, state.passwordConf))
      return setError({
        message: "Passwords Must Match!",
        passwordError: true,
      });
    setError({ message: "", passwordError: false });

    const formData = new FormData();

    formData.append("photo", selectedFile);

    for (let key in state) {
      formData.append(key, state[key]);
    }

    try {
      await userService.signup(formData);
      props.handleSignUpOrLogin();
      navigate("/");
    } catch (err) {
      console.log(err);
      setError({ message: err.message, passwordError: false });
    }
  }

  function handleFileInput(e) {
    console.log(e.target.files, " < - this is e.target.files!");
    setSelectedFile(e.target.files[0]);
  }

  return (
    <div id="signup-page">
      <br />
      <div className="centered">
        <a href="/" className="large-font-size centered white-back login-title">
          Art Home
        </a>
      </div>
      <br />

      <p className="medium-font-size" color="grey" textAlign="center">
        Sign Up
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          value={state.username}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <input
          error={error.passwordError}
          name="password"
          type="password"
          placeholder="password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <input
          error={error.passwordError}
          name="passwordConf"
          type="password"
          placeholder="Confirm Password"
          value={state.passwordConf}
          onChange={handleChange}
          required
        />
        <textarea
          label="bio"
          name="bio"
          placeholder="Tell us more about yourself..."
          value={state.bio}
          onChange={handleChange}
        />

        <input
          type="file"
          name="photo"
          placeholder="upload image"
          accept="image/png, image/jpeg"
          onChange={handleFileInput}
        />

        <button type="submit" className="btn">
          Signup
        </button>

        {error.message ? <ErrorMessage error={error.message} /> : null}
      </form>
    </div>
  );
}
