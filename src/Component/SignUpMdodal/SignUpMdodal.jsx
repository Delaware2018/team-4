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
          <ModalHeader toggle={this.toggle}>Welcome! logo</ModalHeader>
          <ModalBody>
          <Input label="Email" hint="placeholder" />
          <Input label="Password" hint="placeholder" />
          <Container>
            <div className="row">
              <div className="col-sm-6">
                <a href="#">Forgot Password</a>
              </div>
              <div className="col-sm-6">
               <Button>Sign In</Button>
              </div>
            </div>
          </Container>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default SignUpMdodal;