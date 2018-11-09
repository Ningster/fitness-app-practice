import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import TimerMixin from 'react-timer-mixin';
// import FitService from '../services/fitService';
import { NativeEventEmitter, NativeModules } from 'react-native';

class ActivityScreen extends React.Component {
    
    static navigationOptions = {
      title: '活動',
    };

    state = {
      activityStarts: false,
      timerTime: 0,
    }

    intervalId = null;
    subscription = null;

    // componentDidMount() {
    //   const calendarManagerEmitter = new NativeEventEmitter(NativeModules.CalendarManager);
    //   this.subscription = calendarManagerEmitter.addListener(
    //     'EventReminder',
    //     (reminder) => console.log(reminder.name)
    //   );
    // }

    btnOnStart(){
      // this.intervalId = TimerMixin.setInterval(
      //   () => { this.increaseTime() },
      //   1000
      // );
      // console.dir(NativeModules.CalendarManager);
      // NativeModules.CalendarManager.addEvent('One', 'Two', 3, (o)=>{
      //   console.log("In Callback");
      //   console.dir(o);
      // });
      console.dir(NativeModules.RNHealthKit);
      NativeModules.RNHealthKit.authorize((err, result) => {
        if (err || !result) {
            // dispatch(authFailed(false));
            //handle and display error here
            console.log("authFailed");
        } else {
            // dispatch(authSuccess(result));
            // Actions.tabbar();
            console.log("authSuccess");
        }
      });
      // console.dir(NativeModules.RNHealthKit);
      // NativeModules.RNHealthKit.authorizeHealthKit((err) => {
      //   console.log(`The result from Swift is : ${err}`);
      // });
      // NativeModules.CalendarManager.tellJS();
      // const calendarManagerEmitter = new NativeEventEmitter(NativeModules.CalendarManager);
      // this.subscription = calendarManagerEmitter.addListener(
      //   'EventReminder',
      //   (reminder) => console.log(reminder.name)
      // );
      this.setState({activityStarts: true});
    }

    btnOnPause(){
      // TimerMixin.clearInterval(this.intervalId);
      // Don't forget to unsubscribe, typically in componentWillUnmount
      this.subscription.remove();
      this.setState({activityStarts: false});
    }

    increaseTime(){
      this.setState((state, props) => {
        return {timerTime: state.timerTime+1};
      });
    }

    render() {
      // const { navigate } = this.props.navigation;
      const RNHealthKit = NativeModules.RNHealthKit;
      return (
        <View style={{flex: 1, flexDirection: 'column', backgroundColor: '#414548'}}>
          <View style={{flex: 2, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' ,backgroundColor: '#32488d'}}>
            <Text style={{fontSize: 60, fontWeight: 'bold', color: 'white'}}>0.06</Text>
            <Text style={{fontSize: 20, fontWeight: 'normal', color: 'white'}}>公里</Text>
          </View>
          <View style={{flex: 3, justifyContent: 'center', alignItems: 'center', backgroundColor: '#222f57'}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', }}>
              <Text style={{fontSize: 20, fontWeight: 'normal', color: 'white'}}>{this.state.timerTime}  sec</Text>
            </View>
            <View style={{flex: 2, justifyContent: 'center', alignItems: 'center', }}>
              {this.state.activityStarts ? (
                <Button
                  onPress={()=>this.btnOnPause()}
                  title="暫停"
                  color="white"
                />
              ) : (
                <Button
                  onPress={()=>this.btnOnStart()}
                  title="開始"
                  color="white"
                />
              )}
            </View>
          </View>
        </View>
      );
    }
  }

export default ActivityScreen;