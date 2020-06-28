import React, { useState } from "react";

const Footer = (prots) => {
  const [isPublished, togglePublished] = useState(false);
  return (
    <footer>
      <div className="footer">
        <div className="footer-sns">
          <a
            className="footer-sns_bg twitter-btn hvr-pop"
            href="https://twitter.com/kanzume_03"
            target="_blank"
          ></a>
          <a
            className="footer-sns_bg facebook-btn hvr-pop"
            href="https://facebook.com/kanzume03"
            target="_blank"
          ></a>
          <a
            className="footer-sns_bg facebook-btn hvr-pop"
            href="https://facebook.com/kanzume03"
            target="_blank"
          ></a>
        </div>
        <div className="footer-menu">
          <a href="/profile">About me</a> | <a href="/">Home</a>
        </div>
        <div className="copyright">(c) 2020 Hiroto Ito</div>
      </div>
    </footer>
  );
};

export default Footer;
