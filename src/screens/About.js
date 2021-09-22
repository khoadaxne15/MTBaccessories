import React from 'react';
import { View, Image } from 'react-native';
import { Layout, Text } from 'react-native-rapi-ui';

export default function ({ navigation }) {
	return (
		<Layout>
			<View
				style={{
					flex: 5,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Text
				fontWeight="bold"
				size="h4"
				style={{
				alignSelf: 'center',
				padding: 30,
				}}
				>About Us
				</Text>

				<Text
				fontWeight="bold"
				size="h3"
				style={{
				alignSelf: 'center',
				padding: 30,
				}}
				>Our Story
				</Text>

				<Text
				fontWeight="bold"
				size="h3"
				style={{
				alignSelf: 'center',
				padding: 30,
				}}
				>Leadership
				</Text>

				<Text
				fontWeight="bold"
				size="h3"
				style={{
				alignSelf: 'center',
				padding: 30,
				}}
				>Careers
				</Text>

				<Text
				fontWeight="bold"
				size="h3"
				style={{
				alignSelf: 'center',
				padding: 30,
				}}
				>Event Listings</Text>

				<Text
				fontWeight="bold"
				size="h3"
				style={{
				alignSelf: 'center',
				padding: 30,
				}}
				>Our story</Text>

			</View>
		</Layout>
	);
}
