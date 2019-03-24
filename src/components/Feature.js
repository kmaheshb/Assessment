import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateFeature } from '../actions/featureActions';

class Feature extends Component {    

    constructor(props) {
        super(props)
        this.state = {
            flags : this.props
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("DS");
        if (props.values !== state.flags) {
          return {
            flags: props.values,
          };
        }
    
        // Return null if the state hasn't changed
        return null;
    }

    handleInputChange = (e) => {
        console.log(e.target);
        var newFlags = this.state.flags.map((flag, i) => {
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

    render() {
        console.log("Render");
        const regi = this.state.flags.map((flag, ind) => {
            return(<th key={ind}>{flag.region}</th>)
        })
        const values = this.state.flags.map((flag, ind) => {
            return(<td key={ind}><input name={ind} type="checkbox" checked={flag.active} onChange={this.handleInputChange} />{flag.active}</td>)
            
        })
        return (
            <div>
                {this.props.featureName}
                <table className="bp3-html-table">
                    <thead>
                    <tr>
                        {regi}
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        {values}
                    </tr>  
                    </tbody>                  
                </table>
            </div>
        );
    }
}

export default connect(null, { updateFeature })(Feature);