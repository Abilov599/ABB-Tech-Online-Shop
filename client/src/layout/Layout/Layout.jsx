import React, { Component } from "react";
import { Header, Footer } from "..";
import { Home } from "../../pages";

class Layout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <Header />
        <Home />
        <Footer />
      </main>
    );
  }
}

export { Layout };
