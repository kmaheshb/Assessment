import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFeature, saveFeatureFlag, resetFeatures } from '../actions/featureActions';

class Feature extends Component {    

    /**
     * This function handles client change to the checkbox
     * After setting or unsetting the flag, an action is sent to update Redux
     */
    handleInputChange = (e) => {
        
        var newFlags = this.props.values.map((flag, i) => {
            if (i === Number.parseInt(e.target.name))
                return { "region" : flag.region, "active" : !flag.active }
            return flag
        });
        

        this.props.updateFeature({
            name: this.props.featureName,
            displayName: this.props.featureDisplayName,
            value: newFlags
        })
    }

    /**
     * This function handles SAVE button click
     * An action is sent to update the server
     */
    handleSave = () => {
        
        this.props.saveFeatureFlag({
            name: this.props.featureName,
            displayName: this.props.featureDisplayName,
            value: this.props.values
        });
    }

    /**
     * This function handles reset functionality
     * An action is sent to update Redux
     */
    handleReset = () => {
        this.props.resetFeatures(this.props.featureName);
    }

    render() {
        const regi = this.props.values.map((flag, ind) => {
            return(<th className="left-align min-width-50" key={ind}>{flag.region}</th>)
        })
        const values = this.props.values.map((flag, ind) => {
            return(<td className="left-align min-width-50" key={ind}><input name={ind} type="checkbox" checked={flag.active} onChange={this.handleInputChange} />{flag.active}</td>)
            
        })
        return (
            <div>
                <div className="rounded-box">
                    <table className="bp3-html-table">
                        <thead>
                            <tr>
                                <th className="bg-table-head left-align" colSpan={this.props.values.length + 1}>{this.props.featureDisplayName}</th>
                            </tr>
                            <tr>
                                <th className="left-align min-width-150">Region</th>
                                {regi}
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="left-align min-width-150">Status</td> 
                                {values}
                            </tr>
                            <tr>
                                <td className="right-align" colSpan={this.props.values.length + 1}>
                                    <button type="button" onClick={this.handleSave}>Save</button> 
                                    <div className="divider"></div>
                                    <button type="button" onClick={this.handleReset}>Reset</button>
                                </td>
                            </tr>
                        </tbody>                  
                    </table>
                    
                    
                </div>
            </div>
        );
    }
}

export default connect(null, { updateFeature, saveFeatureFlag, resetFeatures })(Feature);