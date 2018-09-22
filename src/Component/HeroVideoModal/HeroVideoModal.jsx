import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';


class HeroVideoModal extends React.Component {
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
      <Container className="flex-center white-text">
        <Button outline className="white-text " color="white" onClick={this.toggle}>Play Video&nbsp;<i class="fa fa-play-circle-o" aria-hidden="true"></i></Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          
          <ModalBody>
            <div class="embed-responsive embed-responsive-16by9 z-depth-1-half">
                <iframe class="embed-responsive-item" src="C:\Users\steph\Documents\GitHub\codeforgood\team-4\bepositiveVideo_Trim.mp4" allowfullscreen></iframe>
            </div>
          </ModalBody>
          <ModalFooter>

            <span class="mr-4">Spread the word!</span>
                        <a type="button" className="btn-floating btn-sm btn-fb"><i class="fa fa-facebook"></i></a>
                    
                        <a type="button" className="btn-floating btn-sm btn-tw"><i class="fa fa-twitter"></i></a>
                   
                        <a type="button" className="btn-floating btn-sm btn-gplus"><i class="fa fa-google-plus"></i></a>
     
                        <a type="button" className="btn-floating btn-sm btn-ins"><i class="fa fa-linkedin"></i></a>

             <Button color="primary" onClick={this.toggle}>Close</Button>{' '}
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

export default HeroVideoModal;