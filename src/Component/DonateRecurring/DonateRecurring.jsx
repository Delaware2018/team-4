import React from 'react';
import DonatePrices from '../DonatePrices/DonatePrices';
import DonateForm from '../DonateForm/DonateForm';

class DonateRecurring extends React.Component {
    render() {
        return(
            <div>
                <DonatePrices/>
                <h3>Frequency:</h3>
                <div class="container mt-5">
                    <div class="row">
                        <div class="custom-control custom-radio mr-5">
                            <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/>
                            <label class="custom-control-label" for="defaultUnchecked">Monthly</label>
                        </div>
                        <div class="custom-control custom-radio mr-5">
                            <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/>
                            <label class="custom-control-label" for="defaultUnchecked">Quarterly</label>
                        </div>
                        <div class="custom-control custom-radio mr-5">
                            <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/>
                            <label class="custom-control-label" for="defaultUnchecked">Yearly</label>
                        </div>
                    </div>
                </div>
                <DonateForm/>
            </div>
        );
    }
}


export default DonateRecurring;