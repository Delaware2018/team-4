import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter, NavLink, Input } from 'mdbreact';


class SignUpMdodal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Container>
        <NavLink to="#" onClick={this.toggle}>Login/Signup</NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>logo </ModalHeader>
          <ModalBody>

          <Input label="Email"  />
          <Input label="Password" />
          <a href="#">new user</a>
          </ModalBody>
          <ModalFooter>
          
          <div className="col-4 mx-auto">
          <a href="#" >Forgot Password</a>
          </div>
          <div className="col-2"></div>
          <Button color="primary" className="col-4 ">Sign In</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default SignUpMdodal;