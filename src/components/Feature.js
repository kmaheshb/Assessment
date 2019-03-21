import React, { Component } from 'react';

class Feature extends Component {    

    render() {
        const regi = this.props.values.map((value, ind) => {
            return(<th key={ind}>{value.name}</th>)
        })
        const values = this.props.values.map((value, ind) => {
            return(<td key={ind}>{value.isActive}</td>)
        })
        return (
            <div>
                {this.props.featureName}
                <table>
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

export default Feature;