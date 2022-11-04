import React, { useState } from "react";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";
import { useNavigate, Link } from "react-router-dom";

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
    <>
      <div className="centered">
        <br />
        <a href="/" className="large-font-size centered white-back login-title">
          ART HOME
        </a>
      </div>
      <br />
      <br />

      <p color="grey" textAlign="center">
        Log in to your account
      </p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={state.email}
          onChange={handleChange}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="password"
          value={state.password}
          onChange={handleChange}
          required
        />
        <button color="grey" fluid size="large" type="submit" className="btn">
          Login
        </button>
      </form>

      <Link to="/signup">
        New to us? <Link to="/signup">Sign Up</Link>
      </Link>
      {error ? <ErrorMessage error={error} /> : null}
    </>
  );
}
