import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import SignupForm from '../components/SignupForm'
import VerificationForm from '../components/VerificationForm'

const AuthScreen = () => {
    return (
        <View>
            <SignupForm />
            <VerificationForm />
        </View>
    )
}

export default AuthScreen

const styles = StyleSheet.create({})
