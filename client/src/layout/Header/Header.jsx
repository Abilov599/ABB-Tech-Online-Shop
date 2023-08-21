import React, { Component } from "react";
import { Modal, Button } from "../../components";
import styles from "./Header.module.scss";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFavoritesModal: false,
      showCartMOdal: false,
    };
  }

  showHideModal(modalName) {
    this.setState((prevState) => ({
      [modalName]: !prevState[modalName],
    }));
  }

  render() {
    const { showFavoritesModal, showCartMOdal } = this.state;
    return (
      <header className={styles.header}>
        <div className="container">
          <div className={styles.wrapper}>
            <h1 className={styles.siteName}>Store</h1>
            <div className={styles.buttons}>
              <Modal
                header={"Favorites"}
                text={
                  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quam facere officia totam quis tempore voluptatibus labore ullam eum dolorum?"
                }
                isOpen={showFavoritesModal}
                onClick={() => this.showHideModal("showFavoritesModal")}
                actions={
                  <>
                    <Button
                      bgColor="#4285F4"
                      text="Cancel"
                      onClick={() => this.showHideModal("showFavoritesModal")}
                    />
                  </>
                }
              />
              <Modal
                text={
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem, ad corrupti aperiam labore quae quidem, eum soluta sequi ipsum vel quam laborum fugit minima quo odio sit enim praesentium."
                }
                header={"Cart"}
                isOpen={showCartMOdal}
                onClick={() => this.showHideModal("showCartMOdal")}
                actions={
                  <>
                    <Button
                      bgColor="#4285F4"
                      text="Checkout"
                      onClick={() => this.showHideModal("showCartMOdal")}
                    />
                  </>
                }
              />
              <Button
                text={"Favorites"}
                bgColor={"#F9A825"}
                onClick={() => this.showHideModal("showFavoritesModal")}
              />
              <Button
                text={"Cart"}
                bgColor={"#4285F4"}
                onClick={() => this.showHideModal("showCartMOdal")}
              />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export { Header };
