import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import pages from './pages'
/*class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to details"
            onPress={} 
        ></Button>
      </View>
    );
  }
}*/

/*class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}*/

const AppNavigator = createStackNavigator(
  {
    Home: pages.HomeScreen,
    Details: pages.DetailsScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle:{
            backgroundColoe: 'f4511e'
        },
        headerTintColor: 'red',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    },    
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

    handleNavigationChange = (prevState, newState, action) => {
        console.log(`prevState, newState, action======> ${prevState, newState, action}`)
    }
  render() {
    return (
        <AppContainer  
            onNavigationStateChange={this.handleNavigationChange}
            uriPrefix="/app" 
        />
    )
   
  }
}