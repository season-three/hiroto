import React from "react";
import Article from "./Article";
import { render } from "@testing-library/react";
import { Foo, Ber } from "./components/FooBar";
import Hoge from "./components/Hoge";

import * as FooBer from "./components/FooBar";

const Blog = () => {
  return (
    <>
      <Article title="React" />
      <Foo />
      <Ber />
      <Hoge />
      <FooBer.Foo />
    </>
  );
};

export default Blog;

// class Blog extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isPublished: false,
//       count: 0,
//     };
//   }

//   componentDidMount() {
//     ボタンがクリックされたらいいねがカウントされる
//     document.getElementById("counter").addEventListener("click", this.countUp);
//   }

//   componentDidUpdate() {
//     console.log(this.state.isPublished);
//     console.log(this.state.count);
//     if (this.state.count > 10) {
//       this.setState({ count: 0 });
//     }
//   }

//   componentWillUnmount() {
//     document
//       .getElementById("counter")
//       .removeEventListener("click", this.countUp);
//   }

//   togglePublished = () => {
//     this.setState({
//       isPublished: !this.state.isPublished,
//     });
//   };

//   countUp = () => {
//     this.setState({
//       count: this.state.count + 1,
//     });
//   };

//   render() {
//     const name = "イトーヒロトです";
//     return (
//       <>
//         <Article
//           title="React"
//           name={`僕の名前は${name}`}
//           isPublished={this.state.isPublished}
//           toggle={() => {
//             this.togglePublished();
//           }}
//           count={this.state.count}
//         />
//         <Foo />
//         <Ber />
//         <Hoge />
//         <FooBer.Foo />
//       </>
//     );
//   }
// }
