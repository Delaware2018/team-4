import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import Hero from '../Hero/Hero';
import AboutHome from '../AboutHome/AboutHome';
import FooterPage from '../FooterPage/FooterPage';
import LatestNews from '../LatestNews/LatestNews';
import SponsorsCarousel from '../SponsorsCarousel/SponsorsCarousel';

class Home extends Component{
    render(){
        return(
            <div>
                <Nav/>
                <Hero/>
                <AboutHome/>
                <hr/>
                {/* <News/>
                 */}
                <SponsorsCarousel/>
                <LatestNews/>
                <FooterPage/>
            </div>
        );
    }
}


export default Home;