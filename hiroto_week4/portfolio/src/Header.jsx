import React, { useState } from "react";
import Navigation from "./Navigation";
import Overlay from "./Overlay";
import { slide as Menu } from "react-burger-menu";

const Header = (prots) => {
  // const [isPublished, togglePublished] = useState(false);
  const OverlayList = [
    {
      link: "",
      name: "TOP",
    },
    {
      link: "",
      name: "ABOUT",
    },
    {
      link: "/service/",
      name: "SERVICE",
    },
    {
      link: "/blog/",
      name: "BLOG",
    },
    {
      link: "/contact/",
      name: "CONRACT",
    },
  ];
  return (
    <header id="menu">
      <Menu>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="about" className="menu-item" href="/about">
          About
        </a>
        <a id="contact" className="menu-item" href="/contact">
          Contact
        </a>
        <a className="menu-item--small" href="">
          Settings
        </a>
      </Menu>
      <div className="smaller">
        <div id="loading-bg" className="bigger">
          <Navigation />
          {OverlayList.map((OverlayItem) => {
            return <Overlay link={OverlayItem.link} name={OverlayItem.name} />;
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
