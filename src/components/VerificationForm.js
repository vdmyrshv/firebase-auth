import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import firebase from 'firebase'

import axios from 'axios'

import { MaterialCommunityIcons, AntDesign, Feather } from '@expo/vector-icons'

const ROOT_URL =
	'https://us-central1-one-time-password-f42cb.cloudfunctions.net'

const VerificationForm = () => {
	const [phone, setPhone] = useState('')
    const [code, setCode] = useState('')
    const [token, setToken] = useState('')

	const handleChangePhone = text => setPhone(text)
	const handleChangeCode = text => setCode(text)

	const handlePhoneVerification = async () => {
		try {
			//prettier-ignore
            const {data: {token}} = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, {phone, code})
            setToken(token)
            firebase.auth().signInWithCustomToken(token)
			console.log(token)
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<View style={styles.container}>
            <Text h4 h4Style={{fontWeight: '100'}}>Verify Your Code</Text>
			<Input
				label='Enter Phone Number'
				leftIcon={
					<MaterialCommunityIcons
						name='phone'
						size={24}
						color='black'
					/>
				}
				placeholder='your phone'
				onChangeText={handleChangePhone}
				value={phone}
			/>
			<Input
				label='Enter Code '
				leftIcon={<AntDesign name='barcode' size={24} color='black' />}
				placeholder='your code'
				onChangeText={handleChangeCode}
				value={code}
			/>
			<Button
				title='submit'
				raised
				iconLeft
				icon={<Feather name='send' size={24} color='darkcyan' />}
				titleStyle={{ marginLeft: 10, color: 'darkcyan' }}
				type='outline'
				onPress={handlePhoneVerification}
			/>
		</View>
	)
}

export default VerificationForm

const styles = StyleSheet.create({
	container: {
		marginVertical: 30,
		marginHorizontal: 10
	}
})
