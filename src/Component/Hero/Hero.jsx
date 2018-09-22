import React, { Component } from 'react';
import { View, Mask, Button } from 'mdbreact';
import './Hero.css';
import HeroVideoModal from '../HeroVideoModal/HeroVideoModal';

class Hero extends Component {
    render(){
        return(
           <View>
                <video class="video-fluid" autoPlay loop muted>
                    <source src="C:\Users\steph\Documents\GitHub\codeforgood\team-4\bepositiveVideo_Trim.mp4" type="video/mp4" />
                </video>
                <Mask overlay="black-strong" >
                <div >
                    <br/><br/><br/><br/>

                        <p className="white-text display-1 flex-center mt-3">Be Positive</p>
                        <p className="white-text flex-center h5-responsive px-3">The Largest Provider of financial assitance to families
                        <br/> 
                        of kids with cancer in the United States</p>
                        
                        
                       <HeroVideoModal/>

                </div>
                </Mask>
          </View>
        );
    }
}

export default Hero;