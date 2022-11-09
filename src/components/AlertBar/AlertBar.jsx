import React from "react";
import Alert from "react-bootstrap/Alert";
import "./AlertBar.css";

function TopAlert() {
  return (
    <>
      <Alert id="alert-bar" key={"warning"} variant={"warning"}>
        Find out your style TODAY! &nbsp; &nbsp; &nbsp; 
        <Alert.Link href="/quiz" id="alert-btn">
          Click Here for your FREE Style Quiz!
        </Alert.Link>
      </Alert>
    </>
  );
}

export default TopAlert;
