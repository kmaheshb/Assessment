import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feature from './components/Feature';
import style from "./css/main.css";

import { fetchAllFeatures, saveFeatureFlags, resetFeatures } from './actions/featureActions';

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

    render() {
        const features = this.state.features.length > 0 ? this.state.features.map((feature, ind) => {
            return (<Feature featureName={feature.name} values={feature.value} key={ind} />)
        }) : null;

        const isFetching = this.props.isFetching ? <span>Fetching...</span> : <span></span>;
        const isSaving = this.props.isSaving ? <span>Saving...</span> : <span></span>; 

        return (
            <div>
                {isFetching}
                {isSaving}
                <br />
                {features}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    featureFlags :  state.Features.features.list,
    isFetching : state.Features.features.isFetching,
    isSaving: state.Features.features.isSaving 
})

export default connect(mapStateToProps, { fetchAllFeatures })(App);