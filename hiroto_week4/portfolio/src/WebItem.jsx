// import React, { useState } from "react";
import React from "react";
import GameSection from "./GameSection";

class WebItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="animated">
        <a href={this.props.link} className="popular">
          {" "}
          <figure>
            <img className="visual-image" src={this.props.image} />
            <div className="visual-inner-txt">
              <span>DETAIL</span>
            </div>
          </figure>
          <div className="visual-txt-area">
            <div className="visual-title">{this.props.title}</div>
          </div>
          <div className="visual-caption">{this.props.caption}</div>
        </a>
      </li>
    );
  }
}

export default WebItem;
