import React from "react";
import Alert from "react-bootstrap/Alert";
import "./AlertBar.css";

function TopAlert({headerIntro, headerLinkDisp, headerLinkSrc}) {
  return (
    <>
      <Alert id="alert-bar" key={"warning"} variant={"warning"}>
        {headerIntro} &nbsp; &nbsp; &nbsp; 
        <Alert.Link href={headerLinkSrc} id="alert-btn">
          {headerLinkDisp}
        </Alert.Link>
      </Alert>
    </>
  );
}

export default TopAlert;
