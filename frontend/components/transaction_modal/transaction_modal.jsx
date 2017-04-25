import React from 'react';
import { Link, withRouter } from 'react-router';
import Modal from 'react-modal';
import App from '../app';
import TransactionFormContainer from '../transaction/transaction_form_container';

const modalStyle = {
  overlay : {
    position          : 'fixed',
    top               : 0,
    left              : 0,
    right             : 0,
    bottom            : 0,
    backgroundColor   : 'rgba(200, 200, 200, 0.75)'
  }
}

class TransactionModal extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false

    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement("body");
  }

  openModal() {
    this.setState({modalIsOpen: true})

  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return (
      <div>
        <button className="open-modal" onClick={this.openModal}>
          <i className="fa fa-2x fa-money" aria-hidden="true"></i>
        </button>
        <Modal
          style={modalStyle}
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
          className="Modal"
          overlayClassName="Overlay">
          <div className="modal-form-header">
            <h2 className="modal-title">
              Pay or Request
            </h2>
            <div className="close-modal">
              <button className="modal-close" onClick={this.closeModal}>
                <i className="fa fa-lg fa-times" aria-hidden="true"></i>
              </button>
            </div>
          </div>
          <div className="modal-form">
            <TransactionFormContainer />
          </div>
        </Modal>
      </div>
    )
  }
}




export default TransactionModal;
