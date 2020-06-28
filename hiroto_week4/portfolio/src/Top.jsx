import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import Visual from "./Visual";

export const Top = (prots) => {
  return (
    <div id="top">
      <div>
        <Header />
        <Visual />
        <Main />
        <Footer />
      </div>
    </div>
  );
};

export default Top;
