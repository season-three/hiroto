import React, { useState, useEffect } from "react";
import Article from "./Article";

const LikeButton = () => {
  const [count, counter] = useState(0);
  const [limit, release] = useState(true);

  const countUp = () => {
    counter(count + 1);
  };

  useEffect(() => {
    document.getElementById("counter").addEventListener("click", countUp);
    if (count >= 10) {
      counter(0);
    }
    return () => {
      document.getElementById("counter").removeEventListener("click", countUp);
    };
  }, [limit]);

  return (
    <>
      <button id="counter">いいね数; {count}</button>
      <button onClick={() => release(!limit)}>もっといいねしたい！</button>
    </>
  );
};

export default LikeButton;

// const LikeButton = (props) => {
//   return <button id="counter">いいね数; {props.count}</button>;
// };
