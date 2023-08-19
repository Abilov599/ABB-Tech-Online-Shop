import React, { Component } from "react";
import styles from "./Button.module.scss";

class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { bgColor, onClick, text } = this.props;
    return (
      <button
        style={{ backgroundColor: bgColor }}
        onClick={onClick}
        className={styles["btn"]}
      >
        {text}
      </button>
    );
  }
}

export { Button };

// const Button = ({ text, bgColor, onClick }) => {
//   return (
//     <button
//       style={{ backgroundColor: bgColor }}
//       onClick={onClick}
//       className={styles["btn"]}
//     >
//       {text}
//     </button>
//   );
// };

// export { Button };
