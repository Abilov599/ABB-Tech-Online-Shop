import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className={styles.header}>
        <div className="container">
          <div className={styles.wrapper}>
            <h2>Store</h2>
            <nav></nav>
          </div>
        </div>
      </header>
    );
  }
}

export { Header };
