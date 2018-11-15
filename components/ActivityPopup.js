import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, TouchableOpacity, View, Alert, StyleSheet} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#36454f",
        paddingTop: 40,
    },
    topBar: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        // borderStyle: 'solid',
        // borderWidth: 1,
    },
    mainItemContainer: {
        flex: 6,
        justifyContent: 'center',
        alignItems: 'center',
        // borderStyle: 'solid',
        // borderWidth: 1,
    },
    mainItem: {
        flexDirection: 'row',
        alignItems: 'baseline',
        // borderStyle: 'solid',
        // borderWidth: 1,
    },
    subItems: {
        flex: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // borderStyle: 'solid',
        // borderWidth: 1,
    },
    subItem: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // borderStyle: 'solid',
        // borderWidth: 1,
    },
    controlPanel: {
        flex: 4,
        justifyContent: 'center',
        // alignItems: 'center',
        // borderStyle: 'solid',
        // borderWidth: 1,
    },
    controlPanelStop: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    controlPanelPause: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subItemText: {
        color: '#ffffff',
        fontSize: 25,
        fontFamily: 'AvenirNextCondensed-Medium',
        marginTop: 20,
        marginBottom: 20, 
    },
    subItemName: {
        color: '#a3a1af',
    },
    pauseBtn: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'#fff',
        borderRadius:100,
    },
    playBtn: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'#2db4aa',
        borderRadius:100,
    },
    stopBtn: {
        borderWidth:1,
        borderColor:'rgba(0,0,0,0.2)',
        alignItems:'center',
        justifyContent:'center',
        width:100,
        height:100,
        backgroundColor:'#f95995',
        borderRadius:100,
    },
  });

class ActivityPopup extends Component {
  
    state = {
        isPaused: false,
    }

    onPause = () => {
        this.setState({isPaused: true});
    }

    onPlay = () => {
        this.setState({isPaused: false});
    }

    render() {
    
      this.closePopup = this.props.closePopup;

      return (
        <View>
            <Modal
                animationType="slide"
                transparent={false}
                visible={true}
                onRequestClose={() => {
                Alert.alert('Modal has been closed.');
                }}>
                <View style={styles.container}>
                    <View style={styles.topBar}>
                        <Text style={{color: '#ffffff'}}>跑步中</Text>
                    </View>
                    <View style={styles.mainItemContainer}>
                        <View style={styles.mainItem}>
                            <Text style={{fontSize: 90, color: '#ffffff', fontFamily: 'AvenirNextCondensed-Medium'}}>0.06</Text>
                            <Text style={{color: '#ffffff'}}>  公里</Text>
                        </View>
                    </View>
                    <View style={styles.subItems}>
                        <View style={styles.subItem}>
                            <Icon name="speedometer" size={30} color="#a3a1af" />
                            <Text style={styles.subItemText}>15'21''</Text>
                            <Text style={styles.subItemName}>配速</Text>
                        </View>
                        <View style={styles.subItem}>
                            <Icon name="timer" size={30} color="#a3a1af" />
                            <Text style={styles.subItemText}>00:01:07</Text>
                            <Text style={styles.subItemName}>用時</Text>
                        </View>
                        <View style={styles.subItem}>
                            <Icon name="fire" size={30} color="#a3a1af" />
                            <Text style={styles.subItemText}>4</Text>
                            <Text style={styles.subItemName}>千卡</Text>
                        </View>
                    </View>
                    <View style={styles.controlPanel}>
                        {this.state.isPaused == true ? (
                            <View style={styles.controlPanelStop}>
                                <TouchableOpacity
                                    style={styles.playBtn}
                                    onPress={this.onPlay}
                                >
                                    <Icon name={"play"}  size={30} color="#fff" />
                                    <Text style={{color:"#fff"}}>繼續</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.stopBtn}
                                    onPress={this.closePopup}
                                >
                                    <Icon name={"stop"}  size={30} color="#fff" />
                                    <Text style={{color:"#fff"}}>結束</Text>
                                </TouchableOpacity>
                            </View>
                        ):(
                            <View style={styles.controlPanelPause}>
                                <TouchableOpacity
                                    style={styles.pauseBtn}
                                    onPress={this.onPause}
                                >
                                    <Icon name={"pause"}  size={30} color="#36454f" />
                                    <Text>暫停</Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                </View>
            </Modal>
        </View>
      );
    }
  }
  
  export default ActivityPopup;