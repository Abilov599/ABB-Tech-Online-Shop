import React, { Component } from "react";
import styles from "./Card.module.scss";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card">
        <div className="image">
          <img src="" alt={"Product"} />
        </div>
        <div className="content">
          <div className="header">Matthew</div>
          <div className="meta">
            <span className="date">Joined in 2015</span>
          </div>
          <div className="description">
            Matthew is a musician living in Nashville.
          </div>
        </div>
        <div className="extra content">
          <a>
            <i aria-hidden="true" className="user icon"></i>22 Friends
          </a>
        </div>
      </div>
    );
  }
}

export { Card };
