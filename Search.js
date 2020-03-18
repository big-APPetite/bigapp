//npm install --save react-native-material-dropdown
//info on dropdown component: https://www.npmjs.com/package/react-native-material-dropdown

import React, {Component} from 'react';
import {Dropdown} from 'react-native-material-dropdown';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {location: ''};
    }
    render() {
        let locations = [
            {
                value: 'Harmer',
            },
            {
                value: 'Eric Mensforth',
            },
            {
                value: 'Sheaf',
            },
            {
                value: 'Howard/Surrey',
            },
            {
                value: 'Adsetts',
            },
            {
                value: 'Stoddart',
            },
            {
                value: 'Cantor',
            },
            {
                value: 'Arundel',
            },
            {
                value: 'Oneleven',
            },
            {
                value: 'Charles Street',
            },
            {
                value: 'Sheffield Institute of ARts',
            },
            {
                value: 'Owen',
            },
            {
                value: 'Norfolk',
            },
        ];

        return (
            <Dropdown
                label="Choose location"
                data={locations}
                onChangeText={location => this.setState({location})}
                value={this.state.location}
            />
        );
    }
}
export default Search;
