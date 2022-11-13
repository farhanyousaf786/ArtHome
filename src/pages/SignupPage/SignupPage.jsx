import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import AlertBar from "../../components/AlertBar/AlertBar";
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate, Link } from "react-router-dom";
import userService from "../../utils/userService";
import "./SignupPage.css";

function isPasswordMatch(passwordOne, passwordConf) {
  return passwordOne === passwordConf;
}

export default function SignUpPage(props) {
  const funFacts =["Carpet does not belong in the bathroom. Please pass it on."]
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
      <AlertBar headerIntro={funFacts[0]}/>
      <NavBar />
      <div className="login-separate"></div>
      <div className="segment-container">
        <div className="segment">
          <p className="sub-header">Sign Up</p>

          <form onSubmit={handleSubmit}>
            <div id="form-left">
            <input
              type="text"
              name="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <input
              error={error.passwordError}
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <br />
            <input
              error={error.passwordError}
              name="passwordConf"
              type="password"
              placeholder="Confirm Password"
              value={state.passwordConf}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <textarea
              label="bio"
              name="bio"
              placeholder="Tell us more about yourself..."
              value={state.bio}
              onChange={handleChange}
            />
            </div>
            <br />

            <input
              type="file"
              name="photo"
              placeholder="upload image"
              accept="image/png, image/jpeg"
              onChange={handleFileInput}
              id="chs-file-btn"
            />
            <br />
            <br />
            <button type="submit" className="login-btn">
              Signup
            </button>
            <br />
            <br />
            <p className="segment-footer">
            Already signed up? <Link to="/login">Log In</Link>
            </p>
            {error.message ? <ErrorMessage error={error.message} /> : null}
          </form>
        </div>
      </div>
    </div>
  );
}
