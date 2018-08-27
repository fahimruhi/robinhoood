import React, { Component } from 'react';
import { StyleSheet, Text, View, Button,ScrollView, Alert,AppRegistry } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <ScrollView style={styles.first}/>

        <View style={styles.second}>
        <View style={{flexDirection: 'row'}}>
        <View style={[{ width: "20%", margin: 0, padding: 2, backgroundColor: "white" }]}>
          <Button onPress={this.buttonClickListener} title="ABOUT" color="steelblue"/>
        </View>
        <View style={[{ width: "20%", margin: 0, padding: 2, backgroundColor: "white" }]}>
          <Button onPress={() => {}} title='HOME' color="steelblue" />
        </View>
        <View style={[{ width: "25%", margin: 0, padding: 2, backgroundColor: "white" }]}>
          <Button onPress={() => {}} title='SEARCH' color="steelblue" />
        </View>
        <View style={[{ width: "38%", margin: 0, padding: 2, backgroundColor: "white" }]}>
          <Button onPress={() => {}} title='NOTIFICATION' color="steelblue" />
        </View>
        
        </View> 

        </View>

        <ScrollView style={styles.third}/>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  first: {
    width: 360,
    height: 30,
    backgroundColor: 'black',
  },
  second: {
    width: 360,
    height: 36,
    backgroundColor: 'steelblue',

  },
  third: {
    width: 360,
    height: 400,
    backgroundColor: 'skyblue',
  },
  submit:{
    borderColor:'white',
},

});
