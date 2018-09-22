import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';

class Home extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <Hero/>
                <div>text</div>
            </div>
        );
    }
}


export default Home;