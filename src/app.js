import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feature from './components/Feature';

import { fetchAllFeatures, resetFeatures } from './actions/featureActions';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            features : []
        }

        this.props.fetchAllFeatures();
    }

    static getDerivedStateFromProps(props, state) {
        
        if (props.featureFlags !== state.features) {
            return {
                features: props.featureFlags,
            };
        }
    
        // Return null if the state hasn't changed
        return null;
    }

    handleSave = () => {
        console.log("Save");
    }

    render() {
        const features = this.state.features.length > 0 ? this.state.features.map((feature, ind) => {
            return (<Feature featureName={feature.name} values={feature.value} key={ind} />)
        }) : null;
        return (
            <div>
                {features}
                <button type="button" onClick={this.handleSave}>Save</button>
                <button type="button" onClick={this.props.resetFeatures}>Reset</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    featureFlags :  state.Features.features.list
})

export default connect(mapStateToProps, { fetchAllFeatures, resetFeatures })(App);