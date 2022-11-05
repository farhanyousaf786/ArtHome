import React from "react";
import Image from "react-bootstrap/Image";
import "./Bio.css";

function Bio() {
  return (
    <>
      <div id="profile-pic-container">
        <Image
          id="profile-pic"
          roundedCircle="true"
          thumbnail="true"
          src="https://i.imgur.com/Xpio4Xs.jpg"
          alt="Profile Picture"
        />
        Here is my story.
        <br />
        <br />
        I'm an amazing interior designer that you are going to want to hire
        right away! Browse through my site and admire my many projects. Take a
        style quiz to find out your style and to secretly give my your contact
        information. Most importantly, give me your money!!
      </div>
    </>
  );
}

export default Bio;
