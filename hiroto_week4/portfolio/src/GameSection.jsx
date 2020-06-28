import GameItem from "./GameItem";
import React, { Component } from "react";

//import Top from "./Top";

const GameSection = (props) => {
  const gameSectionList = [
    {
      link: "/opera",
      image: "operaCompatition.jpeg",
      title: "静岡国際オペラコンクール",
    },
    {
      link: "/music",
      image: "hello-orchestra.jpg",
      title: "こんにちはオーケストラ",
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
          {gameSectionList.map((gameSectionItem) => {
            return (
              <GameItem
                link={gameSectionItem.link}
                image={gameSectionItem.image}
                title={gameSectionItem.title}
                caption={gameSectionItem.caption}
              />
            );
          })}
        </ul>
      </div>
      <a id="web"></a>
    </section>
  );
};

export default GameSection;
