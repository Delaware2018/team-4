import React from 'react';

class DonatePrices extends React.Component {
    render() {
        return (
            <div class="container mt-5">
                <div class="row">
                    <div class="custom-control custom-radio mr-5">
                        <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/>
                        <label class="custom-control-label" for="defaultUnchecked">$5</label>
                    </div>
                    <div class="custom-control custom-radio mr-5">
                        <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/>
                        <label class="custom-control-label" for="defaultUnchecked">$10</label>
                    </div>
                    <div class="custom-control custom-radio mr-5">
                        <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/>
                        <label class="custom-control-label" for="defaultUnchecked">$20</label>
                    </div>
                    <div class="custom-control custom-radio mr-5">
                        <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/>
                        <label class="custom-control-label" for="defaultUnchecked">$50</label>
                    </div>
                    <div class="custom-control custom-radio mr-5">
                        <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"/>
                        <label class="custom-control-label" for="defaultUnchecked">
                            <input type="text" class="form-control" id="other" placeholder="Other"/>
                        </label>
                    </div>
                </div>
            </div>
        );
    }
}