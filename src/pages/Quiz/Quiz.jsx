import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import AlertBar from "../../components/AlertBar/AlertBar";
import "./Quiz.css";

export default function Quiz({loggedUser, handleLogout}) {

    return(
        <div>
            <AlertBar />
            <NavBar loggedUser={loggedUser} handleLogout={handleLogout} />
        </div>
    )
}