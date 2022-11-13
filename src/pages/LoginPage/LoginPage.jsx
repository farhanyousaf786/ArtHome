import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import NavBar from "../../components/NavBar/NavBar";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";
import "./LoginPage.css";

export default function LoginPage(props) {
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
      <NavBar />
      <div className="login-separate"></div>
      <div className="segment-container">
        <div className="segment">
          <p>Log in to your account</p>

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
            <button
              color="grey"
              fluid
              size="large"
              type="submit"
              className="btn"
            >
              Login
            </button>
          </form>
          <br />

          <Link to="/signup">
            New to us? <Link to="/signup">Sign Up</Link>
          </Link>
          {error ? <ErrorMessage error={error} /> : null}
        </div>
      </div>
      <div className="login-separate"></div>
      <Footer />
    </div>
  );
}
