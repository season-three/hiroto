import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import MusicSection from "./MusicSection";

export function Music() {
  return (
    <div className="top">
      <div className="top-page">
        <header>
          <div className="header-top">header</div>
        </header>
        <main>
          <div className="main-inner">
            <div className="main-top">
              <img className="visual-image" src="hello-orchestra.jpg" />
              <div className="music-txt">
                <div className="main-txt">
                  <h1>こんにちはオーケストラ</h1>
                  <h2>フライヤー/パンフレットデザイン</h2>
                </div>
                <p>
                  浜松に住む約8000人の小学５年生がオーケストラを鑑賞するという学校行事のパンフレットデザインを担当した。実際に浜松市内の小学校に見学にいき、小学５年生にあったデザインは何かを考え制作した。
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
      <MusicSection />

      <Footer />
    </div>
  );
}

{
  /* <img className="visual-image" src="hello-orchestra.jpg" /> */
}
