import React, { Component } from 'react';
import Feature from './components/Feature';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            features : [
                { 
                    name : "useAwesomeGames",
                    value : [
                        {name:"Asia", isActive:true}, 
                        {name:"Korea", isActive:false}, 
                        {name:"Europe", isActive:false}, 
                        {name:"Japan", isActive:false}, 
                        {name:"America", isActive:true}
                    ]
                },
                { 
                    name : "Identity_Information",
                    value : [
                        {name:"Asia", isActive:false}, 
                        {name:"Korea", isActive:false}, 
                        {name:"Europe", isActive:false}, 
                        {name:"Japan", isActive:true}, 
                        {name:"America", isActive:true}
                    ]
                }
            ]
        }
    }

    render() {
        const features = this.state.features.map((feature, ind) => {
            return (<Feature featureName={feature.name} values={feature.value} key={ind} />)
        })
        return (
            <div>
                {features}
            </div>
        );
    }
}

export default App;