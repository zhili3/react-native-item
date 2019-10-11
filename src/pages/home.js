import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  Image,
  StatusBar,
} from 'react-native';
class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('../logo.png')}
        style={{ width: 100, height: '100%' }}
      />
    );
  }
}

export default class HomeScreen extends React.Component {
     static navigationOptions = {
        // headerTitle instead of title
        headerTitle: <LogoTitle />,
        headerRight: (
            <Button 
                onPress={() => alert('This is a button!')} 
                title="Info"
                color="#fff"
            />
        )
    };

    componentDidMount() {
        this.props.navigation.setParams({ increaseCount: this._increaseCount });
    }

    state = {
        count: 0,
    };

    _increaseCount = () => {
        console.log(this.state.count + 1)
        this.setState({ count: this.state.count + 1 });
    };

    //  static navigationOptions = ({ navigation, screenProps, navigationOptions }) => {
    //      console.log(navigation, screenProps, navigationOptions)
    //     return {
    //         title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    //         headerTitle: <LogoTitle />,
    //     };
    
    // };

    componentWillUnmount() {
        console.log(`componentWillUnmount--home===>执行`)
    }
    goDetails = () => {
        // console.log(this.props)
        this.props.navigation.navigate('Details',{
            itemId: 86,
            otherParam: 'anything you want here',
        })
    }
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button title="Go to details"
            onPress={this.goDetails} 
        ></Button>
      </View>
    );
  }
}