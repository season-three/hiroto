import React from "react";

class Overlay extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // const overlay = document.querySelector("#overlay");
    // overlay.classList.add("overlay-after");
    return (
      <div id="overlay" className="overlay-before">
        {/* <div className="overlay-inner">
          <ul class="overlay-navi">
            <li>
              <a className="icon_top" href={this.props.link}>
                <span>{this.props.name}</span>
              </a>
            </li>
          </ul>

          <ul className="overlay-sns">
            <li>
              <a
                className="footer-sns_bg twitter-btn hvr-pop"
                href="http://twitter.com/kanzume_03"
                target="_blank"
              ></a>
            </li>
            <li>
              <a
                className="footer-sns_bg facebook-btn hvr-pop"
                href="http://facebook.com/kanzume03"
                target="_blank"
              ></a>
            </li>
            <li>
              <a
                className="footer-sns_bg feed-btn hvr-pop"
                href="https://yugo-k.work/feed/"
              ></a>
            </li>
          </ul>
        </div> */}
      </div>
    );
  }
}

export default Overlay;
