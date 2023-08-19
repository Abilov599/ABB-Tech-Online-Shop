import React, { Component } from "react";
import styles from "./Modal.module.scss";

class Modal extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { header, isOpen, text, actions, onClick } = this.props;
    return isOpen ? (
      <div className={styles["modal-overlay"]}>
        <div className={styles["modal-content"]}>
          <button className={styles["close-button"]} onClick={onClick}>
            X
          </button>
          <h2>{header}</h2>
          <p>{text}</p>
          <div className={styles["modal-actions"]}>{actions}</div>
        </div>
      </div>
    ) : null;
  }
}

export { Modal };

// const Modal = ({ header, isOpen, text, actions, onClick }) => {
//   return isOpen ? (
//     <div className={styles["modal-overlay"]}>
//       <div className={styles["modal-content"]}>
//           <button className={styles["close-button"]} onClick={onClick}>
//             X
//           </button>
//         <h2>{header}</h2>
//         <p>{text}</p>
//         <div className={styles["modal-actions"]}>{actions}</div>
//       </div>
//     </div>
//   ) : null;
// };

// export { Modal };
