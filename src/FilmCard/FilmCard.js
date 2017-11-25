import React, { Component } from "react";
import { Card, Button, Modal } from "antd";

class FilmCard extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  showModal = () => {
    this.setState({ visible: true });
  };

  closeModal = e => {
    this.setState({ visible: false });
  };

  render() {
    return (
      <div>
        <Card>
          <h2>{this.props.title}</h2>
          <p>{this.props.release_date}</p>
          <Button type="primary" onClick={this.showModal}>
            View
          </Button>
        </Card>
        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.closeModal}
          onCancel={this.closeModal}
          okText="Ok"
          cancelText="Close"
        >
          <p>{this.props.description}</p>
        </Modal>
      </div>
    );
  }
}

export default FilmCard;
