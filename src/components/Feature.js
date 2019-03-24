import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFeature, saveFeatureFlag, resetFeatures } from '../actions/featureActions';

class Feature extends Component {    

    handleInputChange = (e) => {
        console.log(e.target);
        var newFlags = this.props.values.map((flag, i) => {
            if (i === Number.parseInt(e.target.name))
                return { "region" : flag.region, "active" : !flag.active }
            return flag
        });
        console.log(newFlags);

        this.props.updateFeature({
            name: this.props.featureName,
            value: newFlags
        })
    }

    handleSave = () => {
        
        this.props.saveFeatureFlag({
            name: this.props.featureName,
            value: this.props.values
        });
    }

    handleReset = () => {
        this.props.resetFeatures(this.props.featureName);
    }

    render() {
        console.log("Render");
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
                                <th className="bg-table-head left-align" colSpan={this.props.values.length + 1}>{this.props.featureName}</th>
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