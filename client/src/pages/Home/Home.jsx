import React, { Component } from "react";
import { Modal, Button } from "../../components";
import styles from "./Home.module.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: true,
      error: null,
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
  showHideModal = (modalName) => {
    this.setState((prevState) => ({
      [modalName]: !prevState[modalName],
    }));
  };

  render() {
    const { data, isLoading, error } = this.state;

    const { products } = data;

    if (error) {
      return <p>Error: {error.message}</p>;
    }
    return (
      <section className={styles.home}>
        <div className="container">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <ul>
              {products.map((item) => {
                return <li key={item.id}>{item.Name}</li>;
              })}
            </ul>
          )}
        </div>
      </section>
    );
  }
}

export { Home };
