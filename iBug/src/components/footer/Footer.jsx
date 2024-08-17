import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="section-footer">
      <div className="container">
        <div className="copyrights">
          ©Copyrights. All rights reserved to | Suyan Man Amatya
        </div>
        <div className="sponsors">
          <div className="title">Sponsors</div>
          <div className="items">
            <div className="item">Atom Trade-Links</div>
            <div className="item">Apple Inc.</div>
            <div className="item">Google LLC.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
