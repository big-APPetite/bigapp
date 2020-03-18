import React, {Component} from 'react';
import {
    Button,
    View,
    Text,
    Alert,
} from 'react-native';

class Account extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <View>
                <Text>Your Account</Text>
                <Button
                    title="View and edit posts"
                    onPress={() => Alert.alert('Posts Button pressed')}
                />
                <Button
                    title="Delete account"
                    onPress={() => Alert.alert('Delete account Button pressed')}
                />
                <Button
                    title="Logout"
                    onPress={() => Alert.alert('Logout Button pressed')}
                />
            </View>
        );
    }
}

export default Account;
