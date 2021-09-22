import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	ScrollView,
	TouchableOpacity,
	View,
	KeyboardAvoidingView,
	Image,
} from 'react-native';
import * as firebase from 'firebase';

import { Layout, Text, TextInput, Button } from 'react-native-rapi-ui';

export default function ({ navigation }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [name, setName] = useState('');
	const [address, setAdress] = useState('');
	const [loading, setLoading] = useState(false);

	async function register() {
		setLoading(true);
		await firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((user) => {
				const fSt =  firebase.firestore();
				const userID = user.user.uid;
				const userdata= fSt.collection('users').doc(userID);
				userdata.set({
				  displayName:name,
				  email:email,
				  address:address,
				  userType: "customer",
				  userImg: null,
				});
			  })
			.catch(function (error) {
				// Handle Errors here.
				var errorCode = error.code;
				var errorMessage = error.message;
				// ...
				setLoading(false);
				alert(errorMessage);
			});
	}

	return (
		<KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
			<StatusBar style="auto" translucent backgroundColor="#f7f7f7" />
			<Layout>
				<ScrollView
					contentContainerStyle={{
						flexGrow: 1,
					}}
				>
					<View
						style={{
							flex: 1,
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: '#DCDCDC',
						}}
					>
						<Image
							resizeMode="contain"
							style={{
								height: 150,
								width: 150,
							}}
							source={require('../../../assets/LOGO.png')}
						/>
					</View>
					<View
						style={{
							flex: 3,
							paddingHorizontal: 20,
							paddingBottom: 20,
							backgroundColor: '#DCDCDC',
						}}
					>
						<Text
							fontWeight="bold"
							size="h3"
							style={{
								alignSelf: 'center',
								padding: 30,
							}}
						>
							Register
						</Text>
						<Text>Email</Text>
						<TextInput
							containerStyle={{ marginTop: 15 }}
							placeholder="Enter your email"
							value={email}
							autoCapitalize="none"
							autoCompleteType="off"
							autoCorrect={false}
							keyboardType="email-address"
							onChangeText={(text) => setEmail(text)}
						/>

						<Text>Name</Text>
						<TextInput
							containerStyle={{ marginTop: 15 }}
							placeholder="Enter your name"
							value={name}
							autoCapitalize="none"
							autoCompleteType="off"
							autoCorrect={false}
							keyboardType="email-address"
							onChangeText={(text) => setName(text)}
						/>
						
						<Text>address</Text>
						<TextInput
							containerStyle={{ marginTop: 15 }}
							placeholder="Enter your address"
							value={address}
							autoCapitalize="none"
							autoCompleteType="off"
							autoCorrect={false}
							keyboardType="email-address"
							onChangeText={(text) => setAdress(text)}
						/>												

						<Text style={{ marginTop: 15 }}>Password</Text>
						<TextInput
							containerStyle={{ marginTop: 15 }}
							placeholder="Enter your password"
							value={password}
							autoCapitalize="none"
							autoCompleteType="off"
							autoCorrect={false}
							secureTextEntry={true}
							onChangeText={(text) => setPassword(text)}
						/>


						<Button
							text={loading ? 'Loading' : 'Create an account'}
							onPress={() => {
								register();
							}}
							style={{
								marginTop: 20,
							}}
							disabled={loading}
						/>

						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								marginTop: 15,
								justifyContent: 'center',
							}}
						>
							<Text size="md"></Text>
							<TouchableOpacity
								onPress={() => {
									navigation.navigate('Login');
								}}
							>
								<Text
									size="md"
									fontWeight="bold"
									style={{
										marginLeft: 5,
									}}
								>
									Click here if you already have an account
								</Text>
							</TouchableOpacity>
						</View>
					</View>
				</ScrollView>
			</Layout>
		</KeyboardAvoidingView>
	);
}
