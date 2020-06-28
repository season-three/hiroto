import React, { useState } from "react";
import OtherItem from "./OtherItem";

const OtherSection = (prots) => {
  const [isPublished, togglePublished] = useState(false);

  const OtherSectionList = [
    {
      link: "https://works/business-card/",
      image: "hirotypo.jpg",
      title: "タイポグラフィ　ヒロタイポ",
    },
    {
      link: "https://note.com/hirohirotootoo/m/mf3954f6cb87b",
      image: "note.jpg",
      title: "２ヶ月間デザイナーがプログラミングを学んでみた",
    },
  ];
  return (
    <section className="visual-area game-section">
      <div className="visual-area-inner">
        <div className="visual-category-inner">
          <header class="contents-title">
            <h2>Others</h2>
          </header>
        </div>
        <ul className="visual-list">
          {OtherSectionList.map((otherSectionItem) => {
            return (
              <OtherItem
                link={otherSectionItem.link}
                image={otherSectionItem.image}
                title={otherSectionItem.title}
                caption={otherSectionItem.caption}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default OtherSection;
