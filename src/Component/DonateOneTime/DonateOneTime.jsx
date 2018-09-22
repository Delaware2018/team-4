import React from 'react';
import DonatePrices from '../DonatePrices/DonatePrices';
import DonateForm from '../DonateForm/DonateForm';

class DonateOneTime extends React.Component {
    render() {
        return(
            <div>
                <DonatePrices/>
                <DonateForm/>
            </div>
        );
    }
}

export default DonateOneTime;