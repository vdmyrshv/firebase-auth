import { StatusBar } from 'expo-status-bar'
import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'
import {firebaseConfigObj} from './src/environment'

import AuthScreen from './src/screens/AuthScreen'

export default function App() {
	useEffect(() => {
		const firebaseConfig = firebaseConfigObj
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig)
	}, [])
	return <AuthScreen />
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
})
