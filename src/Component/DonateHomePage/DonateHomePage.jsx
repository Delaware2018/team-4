import React from 'react';
import Nav from '../Nav/Nav';

class DonateHomePage extends React.Component {
    render() {
        return (
            <div>
                <Nav/>
                <div class="container">
                    <div class="row mt-5">
                        <div class="card-deck">
                            <div class="card text-center">
                                <img class="card-img-top" src="https://openclipart.org/download/222588/cash1.svg" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Donate Now!</h5>
                                    <p class="card-text">Click here if you would like to donate and help support the cause.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-primary">Donate</a>
                                </div>
                            </div>
                            <div class="card text-center">
                                <img class="card-img-top" src="https://cdn.pixabay.com/photo/2012/04/01/17/38/calendar-23684_960_720.png" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Make a Recurring Donation!</h5>
                                    <p class="card-text">Click here if you would like to make a recurring donation to supporting the cause.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-primary">Donate</a>
                                </div>
                            </div>
                            <div class="card text-center">
                                <img class="card-img-top" src="https://www.digitaldealer.com/wp-content/uploads/2016/10/img-icon-exhibit-hall.png" alt="Card image cap"/>
                                <div class="card-body">
                                    <h5 class="card-title">Become a Sponsor!</h5>
                                    <p class="card-text">Click here if you would like your company to be a sponsor.</p>
                                </div>
                                <div class="card-footer">
                                    <a href="#" class="btn btn-primary">Sign Up</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DonateHomePage;