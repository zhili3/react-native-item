import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';


export default class DetailsScreen extends React.Component {
    static navigationOptions = ({ navigation, screenProps, navigationOptions }) => {
        console.log(`navigation, screenProps, navigationOptions======>${navigation, screenProps, navigationOptions}`
        
        )
        return {
            title: navigation.getParam('otherParam'),
             headerStyle: {
                backgroundColor: navigationOptions.headerTintColor,
            },
            headerTintColor: navigationOptions.headerStyle.backgroundColor,
        };
    };
    componentDidMount() {
        console.log(`componentDidMount--details===>执行`)
    }
    componentWillUnmount() {
        console.log(`componentWillUnmount--details===>执行`)
    }
  render() {
    const { navigation } = this.props
    console.log(navigation)
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(navigation.getParam('itemId','NO-ID'))}</Text>
        <Text>otherParam: {JSON.stringify(navigation.getParam('otherParam','default value'))}</Text>
        <Button
        title="Update the title"
        onPress={() => this.props.navigation.setParams({ otherParam: 'Updated!' })}
        />
      </View>
    );
  }
}
