import React, { Component } from "react";
import { Modal, Button } from "../../components";
import styles from "./Home.module.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      showModal2: false,
      data: [],
      isLoading: true,
      error: null,
    };
  }
  componentDidMount() {
    fetch("../../public/data.json")
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

  // render() {
  //   const { showModal, showModal2 } = this.state;
  //   return (
  //     <section>
  //       <Modal
  //         header={"First Modal"}
  //         text={
  //           "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quam facere officia totam quis tempore voluptatibus labore ullam eum dolorum?"
  //         }
  //         isOpen={showModal}
  //         onClick={() => this.showHideModal("showModal")}
  //         actions={
  //           <>
  //             <Button
  //               bgColor="#4285F4"
  //               text="Ok"
  //               onClick={() => this.showHideModal("showModal")}
  //             />
  //             <Button
  //               bgColor="#4285F4"
  //               text="Cancel"
  //               onClick={() => this.showHideModal("showModal")}
  //             />
  //           </>
  //         }
  //       />
  //       <Modal
  //         text={
  //           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem, ad corrupti aperiam labore quae quidem, eum soluta sequi ipsum vel quam laborum fugit minima quo odio sit enim praesentium."
  //         }
  //         header={"Second Modal"}
  //         isOpen={showModal2}
  //         onClick={() => this.showHideModal("showModal2")}
  //         actions={
  //           <>
  //             <Button
  //               bgColor="#4285F4"
  //               text="Ok"
  //               onClick={() => this.showHideModal("showModal2")}
  //             />
  //             <Button
  //               bgColor="#4285F4"
  //               text="Cancel"
  //               onClick={() => this.showHideModal("showModal2")}
  //             />
  //           </>
  //         }
  //       />
  //       <Button
  //         text={"Open first modal"}
  //         bgColor={"#F9A825"}
  //         onClick={() => this.showHideModal("showModal")}
  //       />
  //       <Button
  //         text={"Open second modal"}
  //         bgColor={"#4285F4"}
  //         onClick={() => this.showHideModal("showModal2")}
  //       />
  //     </section>
  //   );
  // }
}

export { Home };

// function Home() {
//   const [showModal, setShowModal] = useState(false);
//   const [showModal2, setShowModal2] = useState(false);
//   function showHideModal(dispatch) {
//     dispatch((prev) => !prev);
//   }
//   return (
//     <>
//       <Modal
//         header={"First Modal"}
//         text={
//           "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quam facere officia totam quis tempore voluptatibus labore ullam eum dolorum?"
//         }
//         isOpen={showModal}
//         onClick={() => showHideModal(setShowModal)}
//         actions={
//           <>
//             <Button
//               bgColor="#4285F4"
//               text="Ok"
//               onClick={() => showHideModal(setShowModal)}
//             />
//             <Button
//               bg="#4285F4"
//               text="Cancel"
//               onClick={() => showHideModal(setShowModal)}
//             />
//           </>
//         }
//       />
//       <Modal
//         text={
//           "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptatem, ad corrupti aperiam labore quae quidem, eum soluta sequi ipsum vel quam laborum fugit minima quo odio sit enim praesentium."
//         }
//         header={"Second Modal"}
//         isOpen={showModal2}
//         onClick={() => showHideModal(setShowModal2)}
//         actions={
//           <>
//             <Button
//               bgColor="#4285F4"
//               text="Ok"
//               onClick={() => showHideModal(setShowModal2)}
//             />
//             <Button
//               bg="#4285F4"
//               text="Cancel"
//               onClick={() => showHideModal(setShowModal2)}
//             />
//           </>
//         }
//       />
//       <Button
//         text={"Open first modal"}
//         bgColor={"#F9A825"}
//         onClick={() => showHideModal(setShowModal)}
//       />
//       <Button
//         text={"Open second modal"}
//         bgColor={"#4285F4"}
//         onClick={() => showHideModal(setShowModal2)}
//       />
//     </>
//   );
// }
