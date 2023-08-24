import React, { Component } from "react";
import PropTypes from "prop-types";
import { Button, Card, Modal } from "../../components";
import styles from "./Home.module.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      error: null,
      showModal: false, // Add a state for modal visibility
      selectedItem: null, // Store the selected item for the modal
    };
  }

  componentDidMount() {
    fetch("../../data.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          data: data,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          error: error,
          isLoading: false,
        });
      });
  }

  // Function to toggle the modal visibility and set the selected item
  toggleModal = (item) => {
    this.setState((prevState) => ({
      showModal: !prevState.showModal,
      selectedItem: item,
    }));
  };

  addToCartAndCloseModal = (item) => {
    const { setToLocalStorage } = this.props;
    setToLocalStorage(item, "cart");
    this.setState({
      showModal: false,
      selectedItem: null,
    });
  };

  render() {
    const { data, isLoading, error, showModal, selectedItem } = this.state;
    const { favorites, setToLocalStorage } = this.props;
    const { products } = data;

    if (error) {
      return <p>Error: {error.message}</p>;
    }
    return (
      <main className={styles.home}>
        <div className="container">
          {isLoading ? (
            <p className={styles.text}>Loading...</p>
          ) : (
            <div className={styles.row}>
              {products.map((item) => {
                const checkAddedToFavorites = () => {
                  return favorites.some((favItem) => favItem.id === item.id)
                    ? "Remove from favorites"
                    : "Add to favorites";
                };
                return (
                  <React.Fragment key={item.id}>
                    <Card
                      name={item.name}
                      price={item.price}
                      imageURL={item.imageURL}
                      sku={item.sku}
                      backgroundColor={item.backgroundColor}
                    >
                      <>
                        <Button
                          bgColor="#F9A825"
                          text={checkAddedToFavorites()}
                          item={item}
                          onClick={() => setToLocalStorage(item, "favorites")}
                        />
                        <Button
                          text={"Add to cart"}
                          bgColor={"#4285F4"}
                          onClick={() => this.toggleModal(item)} // Open modal
                        />
                      </>
                    </Card>
                    <Modal
                      text={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem, ad corrupti aperiam labore quae quidem, eum soluta sequi ipsum vel quam laborum fugit minima quo odio sit enim praesentium."
                      }
                      header={"Are you sure?"}
                      closeBtn={true}
                      isOpen={showModal} // Pass the modal visibility as prop
                      onClick={() => this.toggleModal(null)} // Close modal
                    >
                      <Button
                        bgColor="#4285F4"
                        text={"Add to cart"}
                        onClick={() => {
                          this.addToCartAndCloseModal(selectedItem, "cart");
                        }}
                      />
                    </Modal>
                  </React.Fragment>
                );
              })}
            </div>
          )}
        </div>
      </main>
    );
  }
}

Home.propTypes = {
  favorites: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  setToLocalStorage: PropTypes.func.isRequired,
};

export { Home };
