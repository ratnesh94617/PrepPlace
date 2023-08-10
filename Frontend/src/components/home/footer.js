import React from "react";
import "./footer.css";
import logo from "../../images/logo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faFacebook,
  faLinkedin,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="foot">
      <div className="foot1">
        <img src={logo} alt="Error" />
        <p>
          Address: SGSITS Indore,
          <br></br>
          Madhya Pradesh<br></br>
          Call Us: 923490234
        </p>
      </div>
      <div className="foot2">
        <p>
          Quick Links<br></br>
        </p>
        <ul className="list">
          <li className="span"> Home</li>
          <li className="span"> Practice</li>
          <li className="span">Interview Experience</li>
          <li className="span">Connect with Seniors</li>
        </ul>
      </div>

      <div className="foot2">
        <p>
          Social<br></br>
        </p>
        <ul className="list">
          <li className="span">
            <FontAwesomeIcon icon={faLinkedin} />
            &nbsp; LinkedIn
          </li>

          <li className="span">
            <FontAwesomeIcon icon={faFacebook} />
            &nbsp; Facebook
          </li>

          <li className="span">
            <FontAwesomeIcon icon={faTwitterSquare} />
            &nbsp; Twitter
          </li>

          <li className="span">
            <FontAwesomeIcon icon={faInstagramSquare} />
            &nbsp; Instagram
          </li>
        </ul>
      </div>
    </div>
  );
}
