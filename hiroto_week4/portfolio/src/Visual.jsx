import React, { useState } from "react";
import TopArea from "./TopArea";

const Visual = (prots) => {
  // const [isPublished, togglePublished] = useState(false);
  return (
    <div>
      <div className="top-visual">
        <div className="top-bg_2 rellax"></div>
        <div className="top-anim-1"></div>
        <div className="top-inner">
          <TopArea />
          <div className="top-sns">
            <div className="top-sns-inner">
              <a
                className="twitter-btn hvr-pop"
                href="//twitter.com/kanzume_03"
                target="_blank"
              ></a>
              <a
                className="facebook-btn hvr-pop"
                href="//facebook.com/kanzume03"
                target="_blank"
              ></a>
              <a
                className="feed-btn hvr-pop"
                href="https://yugo-k.work/feed/"
              ></a>
            </div>
          </div>
        </div>
      </div>
      <div className="scrollDown">
        <a href="#game"></a>
      </div>
      <a id="game"></a>
    </div>
  );
};

export default Visual;
