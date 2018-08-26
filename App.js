import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Button,ScrollView, Alert, } from 'react-native';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <ScrollView style={styles.first}/>
        <ScrollView style={styles.second}>
        <View style={{flexDirection: 'row',borderWidth: 1}}>
        <Button style={styles.submit}  title='HOME' />
        <Button title='SEARCH' />
        </View>
        </ScrollView>
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
    height: 60,
    backgroundColor: 'steelblue',

  },
  third: {
    width: 360,
    height: 400,
    backgroundColor: 'skyblue',
  },
  submit:{
    marginRight:40,
    marginLeft:40,
    marginTop:10,
    paddingTop:20,
    paddingBottom:20,
    backgroundColor:'green',
    borderRadius:10,
    borderWidth: 1,
    borderColor: 'green'
},
});
