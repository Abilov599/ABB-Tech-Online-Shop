import React, { Component } from "react";
import styles from "./Header.module.scss";

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { favorites, cart } = this.props;
    return (
      <header className={styles.header}>
        <div className="container">
          <div className={styles.wrapper}>
            <h1 className={styles.siteName}>Store</h1>
          </div>
        </div>
      </header>
    );
  }
}

export { Header };
