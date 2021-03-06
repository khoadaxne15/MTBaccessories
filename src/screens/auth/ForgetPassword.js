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
	const [loading, setLoading] = useState(false);

	async function forget() {
		setLoading(true);
		await firebase
			.auth()
			.sendPasswordResetEmail(email)
			.then(function () {
				setLoading(false);
				navigation.navigate('Login');
				alert('Your password reset has been sent to your email');
			})
			.catch(function (error) {
				setLoading(false);
				alert(error);
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
							size="h3"
							fontWeight="bold"
							style={{
								alignSelf: 'center',
								padding: 30,
							}}
						>
							Forget Password
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
						<Button
							text={loading ? 'Loading' : 'Send email'}
							onPress={() => {
								forget();
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
