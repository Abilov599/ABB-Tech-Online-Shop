import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.scss";
import { Modal } from "../Modal/Modal";
import { Button } from "../Button/Button";

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showFavoritesModal: false,
      showCartModal: false,
    };
  }

  showHideModal = (modalName) => {
    this.setState((prevState) => ({
      [modalName]: !prevState[modalName],
    }));
  };

  toggleAdding = (modalName, callback) => {
    this.showHideModal(modalName);
    callback();
  };

  render() {
    const {
      name,
      price,
      imageURL,
      sku,
      backgroundColor,
      item: product,
      setToLocalStorage,
      favorites,
      cart,
    } = this.props;

    const { showCartModal, showFavoritesModal } = this.state;
    return (
      <div className={styles.productCard} style={{ backgroundColor }}>
        <img className={styles.image} src={imageURL} alt={name} />
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.price}>Price: ${price.toFixed(2)}</p>
        <p className={styles.sku}>SKU: {sku}</p>
        <div className={styles.buttons}>
          <Modal
            header={"Favorites"}
            text={
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quam facere officia totam quis tempore voluptatibus labore ullam eum dolorum?"
            }
            product={product}
            isOpen={showFavoritesModal}
            closeBtn={true}
            onClick={() => this.showHideModal("showFavoritesModal")}
            actions={
              <>
                <Button
                  bgColor="#4285F4"
                  text="Add to favorites"
                  product={product}
                  onClick={() =>
                    this.toggleAdding("showFavoritesModal", () =>
                      setToLocalStorage(product, "favorites")
                    )
                  }
                />
              </>
            }
          />
          <Modal
            text={
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem, ad corrupti aperiam labore quae quidem, eum soluta sequi ipsum vel quam laborum fugit minima quo odio sit enim praesentium."
            }
            header={"Cart"}
            closeBtn={true}
            isOpen={showCartModal}
            onClick={() => this.showHideModal("showCartModal")}
            actions={
              <>
                <Button
                  bgColor="#4285F4"
                  text="Add to cart"
                  onClick={() =>
                    this.toggleAdding("showCartModal", () =>
                      setToLocalStorage(product, "cart")
                    )
                  }
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
            onClick={() => this.showHideModal("showCartModal")}
          />
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageURL: PropTypes.string.isRequired,
  sku: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};

export { Card };
