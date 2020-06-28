import React, { useState } from "react";
import GameSection from "./GameSection";
import WebSection from "./WebSection";
import OtherSection from "./OtherSection";

const Footer = (props) => {
  const [isPublished, togglePublished] = useState(false);
  return (
    <main>
      <div className="content">
        <div className="contents-inner">
          <article className="works">
            <section className="contents-description  delay-02 slideInUp"></section>
            <GameSection />
            <WebSection />
            <OtherSection />
          </article>
        </div>
      </div>
    </main>
  );
};

export default Footer;
