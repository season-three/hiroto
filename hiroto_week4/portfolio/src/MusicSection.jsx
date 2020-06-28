import GameItem from "./GameItem";
import MusicItem from "./MusicItem";
import React, { Component } from "react";

//import Top from "./Top";

const MusicSection = (props) => {
  const musicSectionList = [
    {
      link: "/opera",
      image: "operaCompatition.jpeg",
      title: "静岡国際オペラコンクール",
    },

    {
      link: "/totebag",
      image: "totebag.jpg",
      title: "ROTOTO コラボトートバッグ",
    },
  ];

  return (
    <section className="visual-area game-section">
      <div className="visual-area-inner">
        <div className="visual-category-inner">
          <header class="contents-title">
            <h2>Works in Hamamathu</h2>
          </header>
        </div>
        <ul className="visual-list">
          {musicSectionList.map((musicImageItem) => {
            return (
              <MusicItem
                link={musicImageItem.link}
                image={musicImageItem.image}
                title={musicImageItem.title}
                caption={musicImageItem.caption}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default MusicSection;
