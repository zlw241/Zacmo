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
  constructor(props) {
    super(props);

    if (this.props.user) {
      this.state = {
        user: this.props.user,
        modalIsOpen: false
      }
    } else {
      this.state = {
        user: {
          username: "",
          id: null
        },
        modalIsOpen: false
      }
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.buttonSize = this.buttonSize.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement("body");
  }

  openModal() {
    this.setState({modalIsOpen: true})
  }

  buttonSize() {
    return {
      width: this.props.size.width, height: this.props.size.height
    }
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }


  render() {
    return (
      <div>
        <button className="open-modal" style={this.buttonSize()} onClick={this.openModal}>
          {this.props.text}
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
            <TransactionFormContainer closeModal={this.closeModal} user={this.state.user} />
          </div>
        </Modal>
      </div>
    )
  }
}



export default TransactionModal;
