import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';
import AboutHome from '../AboutHome/AboutHome';
import FooterPage from '../FooterPage/FooterPage';
import LatestNews from '../LatestNews/LatestNews';

class Home extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <Hero/>
                <AboutHome/>
                <hr/>
                {/* <News/>
                <Sponsors/>
                 */}
                 <LatestNews/>
                <FooterPage/>
            </div>
        );
    }
}


export default Home;