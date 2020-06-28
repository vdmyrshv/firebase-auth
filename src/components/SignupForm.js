import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'

import axios from 'axios'

import { MaterialCommunityIcons, Feather } from '@expo/vector-icons'

const ROOT_URL =
	'https://us-central1-one-time-password-f42cb.cloudfunctions.net'

const SignupForm = () => {
	const [phone, setPhone] = useState('')

	const handleChangeText = text => setPhone(text)

	const handleCodeSubmit = async () => {
		try {
			//prettier-ignore
			const { data } = await axios.post(`${ROOT_URL}/createUser`,{phone})
			console.log(data)
			//prettier-ignore
			await axios.post(`${ROOT_URL}/requestOneTimePassword`, {phone: data.uid})
		} catch (err) {
			console.log(err)
		}
	}

	return (
		<View style={styles.container}>
            <Text h4 h4Style={{fontWeight: '100'}}>Get Your Code</Text>
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
				onChangeText={handleChangeText}
				value={phone}
			/>
			<Button
				title='submit'
				raised
				iconLeft
				icon={<Feather name='send' size={24} color='darkcyan' />}
				titleStyle={{ marginLeft: 10, color: 'darkcyan' }}
				type='outline'
				onPress={handleCodeSubmit}
			/>
		</View>
	)
}

export default SignupForm

const styles = StyleSheet.create({
	container: {
		marginVertical: 30,
		marginHorizontal: 10
	}
})
