import React, { Component } from 'react';

class LatestNews extends Component{

    render(){return(
       <div>
        <h2>Latest News</h2>
            <div class="container mt-5">
                <div class="row mb-3">
                    <div class="col-sm-4">
                        <img src="https://bepositive.org/wp-content/uploads/2018/09/andrew_and_joe_981_2-2-159x300.jpg"/>
                    </div>
                    <div class="col-sm-8">
                        <h3>Rollercoaster</h3>
                        <h4>Sep 21, 2018</h4>
                        <p>The Rollercoaster Ride. When we were in the hospital, we were warned that the 'journey'
                            was going to be like a rollercoaster with many ups and downs. For the record, I really
                            don't like rollercoasters. I wanted our ride to only go up. But as you know, thats not what...
                        </p>
                        <a href="#"><strong>read more</strong></a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <img src="https://bepositive.org/wp-content/uploads/2018/09/Andrew-feeding-monkey-at-birthday-party-225x300.jpg"/>
                    </div>
                    <div class="col-sm-8">
                        <h3>September is Here - Childhood Cancer Awareness Month</h3>
                        <h4>Sep 10, 2018</h4>
                        <p>September is Childhood Cancer Awareness Month AND Andrew's birthday month. One week ago 
                            today was Andrew's 26th birthday. Its' SO bittersweet because we had 14 AMAZING birthdays
                            with Andrew here and, sadly, the last 12 apart. Here's a...
                        </p>
                        <a href="#"><strong>read more</strong></a>
                    </div>
                </div>
            </div>
        </div>
    );}
}

export default LatestNews;