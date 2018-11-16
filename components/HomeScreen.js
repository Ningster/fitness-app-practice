import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import ActivityPopup from './ActivityPopup';
import {NativeModules} from 'react-native';
import coreMotionService from '../services/coreMotionService'

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
      'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
  });

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });

type Props = {};

class HomeScreen extends React.Component<Props> {

    static navigationOptions = {
      title: '首頁',
    };

    state = {showActivityPopup: false}

    closePopup = () => {
        this.setState({showActivityPopup: false});
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Welcome to My Coach App!</Text>
                <Text style={styles.instructions}>To get started, edit App.js</Text>
                <Text style={styles.instructions}>{instructions}</Text>
                {/* <Button
                    onPress={()=> navigate('Activity', { name: 'Jane' })}
                    title="開始活動"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    /> */}
                <Button
                    onPress={()=> {
                        this.setState({ showActivityPopup: true})
                        NativeModules.RNHealthKit.authorize();
                        // console.dir(NativeModules.RNHealthKit); 
                    }}
                    title="開始活動"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                    />
                {this.state.showActivityPopup ? <ActivityPopup closePopup={this.closePopup}/> : null}
            </View>
            );
    }
  }

export default HomeScreen;
