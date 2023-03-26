import React from "react";
import "./Footer.css";
import { Fade } from "react-reveal";
import { greeting } from "../../portfolio.js";
/* eslint-disable jsx-a11y/accessible-emoji */

export default function Footer(props) {
  return (
    <div className="footer-div">
      <Fade>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
        <span role="img"> Made with 🖤 by {greeting.title2} </span>
        </p>
          <p style={{textAlign: 'center', fontSize: '10px' }}>
                  Copyright © Karina Patel 2023
          </p>
      </Fade>
    </div>
  );
}
