import React from "react";
import WebItem from "./WebItem";

const WebSection = (prots) => {
  const WebSectionList = [
    {
      link: "/diet",
      image:
        "https://yugo-k.work/wp-content/themes/portfolio_blog/images/thumbnail/design_thum.jpg",
      title: "e-diet",
    },
  ];
  return (
    <section className="visual-area web-section">
      <div className="visual-area-inner">
        <div className="visual-category-inner">
          <header class="contents-title">
            <h2>UI design</h2>
          </header>
        </div>
        <ul className="visual-list">
          {WebSectionList.map((WebSectionItem) => {
            return (
              <WebItem
                link={WebSectionItem.link}
                image={WebSectionItem.image}
                title={WebSectionItem.title}
                caption={WebSectionItem.caption}
              />
            );
          })}
        </ul>
      </div>
      <a id="other"></a>
    </section>
  );
};

export default WebSection;
