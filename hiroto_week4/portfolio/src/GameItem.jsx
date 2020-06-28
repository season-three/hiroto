import React from "react";
import { Link } from "react-router-dom";

class GameItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <li className="animated">
        <Link to={this.props.link}>
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
        </Link>
      </li>
    );
  }
}

export default GameItem;
