import React from 'react';
import { View, Linking } from 'react-native';
import * as firebase from 'firebase';
import {
	Layout,
	Button,
	Text,
	TopNav,
	Section,
	SectionContent,
} from 'react-native-rapi-ui';

export default function ({ navigation }) {
	return (
		<Layout>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
					marginHorizontal: 20,
				}}
			>
				
				<Section>
					<SectionContent>
						<Text fontWeight="bold" style={{ textAlign: 'center' }}>
							Hi Khoa Pham
						</Text>
						<Text fontWeight="bold" style={{ textAlign: 'center' }}>
							What pages would you like to move on?
						</Text>

						<Button
							text="Go to Motorbike page"
							onPress={() => {
								navigation.navigate('Motorbike');
							}}
							style={{
								marginTop: 10,
							}}
						/>

						<Button
						text="Go to Products screen"
						onPress={() => {
							navigation.navigate('Products');
						}}
						style={{
						marginTop: 10,
						}}
				 		/>

						<Button
							status="danger"
							text="Logout"
							onPress={() => {
								firebase.auth().signOut();
							}}
							style={{
								marginTop: 10,
							}}
						/>
					</SectionContent>
				</Section>
			</View>
		</Layout>
	);
}
