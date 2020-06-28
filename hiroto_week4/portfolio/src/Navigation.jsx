import React, { useState } from "react";

const Navigation = (props) => {
  const [isPublished, togglePublished] = useState(false);
  const NavigationList = [
    {
      link: "/",
      name: "TOP",
    },
    {
      link: "/about/",
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
      name: "CONTACT",
    },
  ];
  return (
    <nav className="navigation">
      <ul className="globalnavi">
        {/* {NavigationList.map((NavigationItem) => {
          return (
            <Navigation link={NavigationItem.link} name={NavigationItem.name} />
          );
        })} */}
      </ul>
    </nav>
  );
};

export default Navigation;
