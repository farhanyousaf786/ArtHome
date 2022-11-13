import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import AlertBar from "../../components/AlertBar/AlertBar";
import NavBar from "../../components/NavBar/NavBar";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage(props) {
  const funFacts =["Carpet does not belong in the bathroom. Please pass it on."]
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      props.handleSignUpOrLogin();
      navigate("/");
    } catch (err) {
      console.log(err, "<--ERROR IN LOGIN PAGE");
      setError(err.message);
    }
  }

  return (
    <div id="login-page">
      <AlertBar headerIntro={funFacts[0]}/>
      <NavBar />
      <div className="login-separate"></div>
      <div className="segment-container">
        <div className="segment">
          <p className="sub-header">Log in to your account</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={state.email}
              onChange={handleChange}
              required
            />
            <br />
            <input
              name="password"
              type="password"
              placeholder="password"
              value={state.password}
              onChange={handleChange}
              required
            />
            <br />
            <br />
            <button
              type="submit"
              className="login-btn"
            >
              Login
            </button>
          </form>
          <br />
          <br />
          <p id="new-to-us">
            New to us? <Link to="/signup">Sign Up</Link>
          </p>
          {error ? <ErrorMessage error={error} /> : null}
        </div>
      </div>
      <div className="login-separate"></div>
      <Footer />
    </div>
  );
}
