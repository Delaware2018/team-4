import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';
import AboutHome from '../AboutHome/AboutHome';

class Home extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <Hero/>
                <AboutHome/>
                {/* <News/>
                <Sponsors/>
                <Foot/> */}
            </div>
        );
    }
}


export default Home;