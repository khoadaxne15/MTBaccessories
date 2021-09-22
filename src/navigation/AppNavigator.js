import React, { useContext } from 'react';
import * as firebase from 'firebase';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { theme } from 'react-native-rapi-ui';
import TabBarIcon from '../components/utils/TabBarIcon';
import TabBarText from '../components/utils/TabBarText';
//Screens
import Home from '../screens/Home';
import Products from '../screens/Products';
import Motorbike from '../screens/Motorbike';
import About from '../screens/About';
import Profile from '../screens/Profile';
import Loading from '../screens/utils/Loading';
// Auth screens
import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import ForgetPassword from '../screens/auth/ForgetPassword';
import { AuthContext } from '../provider/AuthProvider';

// Better put your these secret keys in .env file
const firebaseConfig = {
    apiKey: "AIzaSyDi4h5ndkP6Csl4M0VVzjg0EkGXoE-1kzA",
    authDomain: "motorbike-accessories-1654e.firebaseapp.com",
    projectId: "motorbike-accessories-1654e",
    storageBucket: "motorbike-accessories-1654e.appspot.com",
    messagingSenderId: "1012743864090",
    appId: "1:1012743864090:web:d6f49eb7f2a6fd25d436a3",
    measurementId: "G-H7B0C0TZ6V"
};

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}

const AuthStack = createStackNavigator();
const Auth = () => {
	return (
		<AuthStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<AuthStack.Screen name="Login" component={Login} />
			<AuthStack.Screen name="Register" component={Register} />
			<AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
		</AuthStack.Navigator>
	);
};

const MainStack = createStackNavigator();
const Main = () => {
	return (
		<MainStack.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<MainStack.Screen name="MainTabs" component={MainTabs} />
			<MainStack.Screen name="Products" component={Products} />
			<MainStack.Screen name="Motorbike" component={Motorbike} />
		</MainStack.Navigator>
	);
};

const Tabs = createBottomTabNavigator();
const MainTabs = () => {
	return (
		<Tabs.Navigator
			tabBarOptions={{
				tabStyle: { borderTopWidth: 0 },
				style: { borderTopWidth: 1, borderColor: '#c0c0c0' },
				activeTintColor: theme.primary,
			}}
		>
			{/* these icons using Ionicons */}
			<Tabs.Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarText focused={focused} title="Home" />
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} icon={'md-home'} />
					),
				}}
			/>
			<Tabs.Screen
				name="Profile"
				component={Profile}
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarText focused={focused} title="Profile" />
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} icon={'person'} />
					),
				}}
			/>
			<Tabs.Screen
				name="About"
				component={About}
				options={{
					tabBarLabel: ({ focused }) => (
						<TabBarText focused={focused} title="About" />
					),
					tabBarIcon: ({ focused }) => (
						<TabBarIcon focused={focused} icon={'ios-information-circle'} />
					),
				}}
			/>
		</Tabs.Navigator>
	);
};

export default () => {
	const auth = useContext(AuthContext);
	const user = auth.user;
	return (
		<NavigationContainer>
			{user == null && <Loading />}
			{user == false && <Auth />}
			{user == true && <Main />}
		</NavigationContainer>
	);
};
