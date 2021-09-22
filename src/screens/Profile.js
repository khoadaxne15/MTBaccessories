import React,{useState, useEffect} from 'react';
import { View, Image } from 'react-native';
import { Layout, Text } from 'react-native-rapi-ui';

import firebase from 'firebase';

export default function ({ navigation }) {
	const [userData, setUserData] = useState(null);
  const user = firebase.auth().currentUser;
  const [loading, setLoading] = useState(true); // Set loading to true on component mount

  const getUSER = async () => {
    await firebase
      .firestore()
      .collection("users")
      .doc(user.uid)
      .get()
      .then((documentSnapshot) => {
        // console.log('User exists: ', documentSnapshot.exists);
        if (documentSnapshot.exists) {
          console.log('User data: ', documentSnapshot.data());
          setUserData(documentSnapshot.data());
        }
      });
  };

  useEffect(() => {
    getUSER();
    navigation.addListener("focus", () => setLoading(!loading));
  }, [navigation, loading]);

	return (
		<Layout>
			<View
				style={{
					flex: 1,
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>	
						<Image
						
							resizeMode="contain"
							style={{
								height: 150,
								width: 150,
								borderRadius: 100,
							}}
							source={{uri:userData? userData.userImg:"https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"}}
						/>
						<Text
							fontWeight="bold"
							style={{
								alignSelf: 'center',
								padding: 5,
								color:'black'
							}}
							size="h3"
						>
							{userData ? userData.displayName :"name?"}
						</Text>
						<Text
							fontWeight="bold"
							style={{
								alignSelf: 'center',
								padding: 5,
								color:'black'
							}}
							size="h4"
						>
							{userData ? userData.email :"email?"}
						</Text>
	
			</View>
		</Layout>
	);
}
