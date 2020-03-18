//npm install formik --save
//npm install -S yup

import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput, Alert, Button} from 'react-native';
import {Formik, ErrorMessage} from 'formik';
import * as Yup from 'yup';

class Details extends Component {
    emailInput = null;

    render() {
        return (
            <View>
                <Text>Your Details</Text>
                <Formik
                    initialValues={{
                        name: 'Steph',
                        email: 'libby3steph@gmail.com',
                        password: 'P4ssw0rd',
                    }}
                    validationSchema={Yup.object({
                        name: Yup.string().required('Required'),
                        email: Yup.string()
                            .email('Invalid Email')
                            .required('Required'),
                        password: Yup.string().required('Required'),
                    })}
                    onSubmit={(values, formikActions) => {
                        setTimeout(() => {
                            Alert.alert(JSON.stringify(values));
                            // Important: Make sure to setSubmitting to false so our loading indicator
                            // goes away.
                            formikActions.setSubmitting(false);
                        }, 500);
                    }}>
                    {props => (
                        <View>
                            <TextInput
                                onChangeText={props.handleChange('name')}
                                onBlur={props.handleBlur('name')}
                                value={props.values.name}
                                autoFocus
                                placeholder="Your Name"
                                onSubmitEditing={() => {
                                    // on certain forms, it is nice to move the user's focus
                                    // to the next input when they press enter.
                                    this.emailInput.focus();
                                }}
                            />
                            {props.touched.name && props.errors.name ? (
                                <Text>{props.errors.name}</Text>
                            ) : null}
                            <TextInput
                                onChangeText={props.handleChange('email')}
                                onBlur={props.handleBlur('email')}
                                value={props.values.email}
                                placeholder="Email Address"
                                ref={el => (this.emailInput = el)}
                            />
                            {props.touched.email && props.errors.email ? (
                                <Text>{props.errors.email}</Text>
                            ) : null}
                            <TextInput
                                onChangeText={props.handleChange('password')}
                                onBlur={props.handleBlur('password')}
                                value={props.values.password}
                                placeholder="Password"
                            />
                            {props.touched.password && props.errors.password ? (
                                <Text>{props.errors.password}</Text>
                            ) : null}
                            <Button
                                title="Submit"
                                onPress={props.handleSubmit}
                                color="black"
                                mode="contained"
                                loading={props.isSubmitting}
                                disabled={props.isSubmitting}/>
                            <Button
                                title="Reset"
                                onPress={props.handleReset}
                                color="black"
                                mode="outlined"
                                disabled={props.isSubmitting}/>
                        </View>
                    )}
                </Formik>
            </View>
        );
    }
}

export default Details;
