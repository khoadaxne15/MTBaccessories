import React, { useState } from 'react';
import AppLoading from 'expo-app-loading';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/navigation/AppNavigator';
import { AuthProvider } from './src/provider/AuthProvider';
import { useCachedResources } from 'react-native-rapi-ui';
import { LogBox } from 'react-native';





export default function App(props) {
	LogBox.ignoreLogs(['Remote debugger']);
	LogBox.ignoreLogs(["timer"]);
	const isLoadingComplete = useCachedResources([
		require('./assets/icon.png'),
		require('./assets/splash.png'),
		require('./assets/LOGO.png'),
		require('./assets/kpano.png'),
		require('./assets/kpano1.png'),
	]);

	if (!isLoadingComplete && !props.skipLoadingScreen) {
		return <AppLoading />;
	} else {
		return (
			<SafeAreaView style={{ flex: 1 }}>
				<StatusBar style="auto" translucent />
				<AuthProvider>
					<AppNavigator />
				</AuthProvider>
			</SafeAreaView>
		);
	}
}
