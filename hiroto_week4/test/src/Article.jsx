import React, { useState } from "react";
import Blog from "./Blog";
import LikeButton from "./LikeButton";

const Article = (props) => {
  const [isPublished, togglePublished] = useState(true);
  return (
    <div>
      <h2>{props.title}</h2>
      <label htmlFor="check">公開状態</label>
      <input
        type="checkbox"
        checked={isPublished}
        id="check"
        onClick={() => togglePublished(!isPublished)}
      />
      <LikeButton />
    </div>
  );
};

export default Article;

// const Article = (props) => {
//   const [isPublished, togglePublished] = useState (false)
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <label htmlFor="check">公開状態</label>
//       <input
//         type="checkbox"
//         checked={props.isPublished}
//         id="check"
//         onClick={() => props.toggle()}
//       />
//       <LikeButton count={props.count} />
//     </div>
//   );
// };
