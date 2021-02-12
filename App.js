import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions, useState, TouchableHighlight, TouchableOpacity} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default class App extends Component{
  clear = () =>{
    this.setState({
      usd : null,
      gbp : null,
      btc : null,
      eth : null,
      dogecoin : null,
      tiValue: null,
    })
};


  updateState = () => {
    if(this.state.usd > 0.0){
      this.setState({ 
        gbp: this.state.usd * .75,
        btc: this.state.usd * .000032,
        eth: this.state.usd * .00075,
        dogecoin: this.state.usd * 124.49,
      })}
    

    if(this.state.gbp > 0){
      this.setState({
        usd: this.state.gbp * 1.37,
        btc: this.state.gbp * 0.000042,
        eth: this.state.gbp * 0.0010,
        dogecoin: this.state.gbp * 187.48,
      })}
    
    if(this.state.btc > 0){
      this.setState({ 
        usd: this.state.btc * 31863,
        gbp: this.state.btc * 23268.78,
        eth: this.state.btc * 27.78,
        dogecoin: this.state.btc * 4026848.16,
     })}
     
    if(this.state.eth > 0){
      this.setState({
        usd: this.state.eth * 1335.0,
        gbp: this.state.eth * 974.60,
        btc: this.state.eth * .042,
        dogecoin: this.state.eth * 94354.0,
     })}

    if(this.state.dogecoin > 0){
      this.setState({ 
        usd: this.state.dogecoin * 0.049,
        gbp: this.state.dogecoin * 0.03001398,
        btc: this.state.dogecoin * 0.00000118,
        eth: this.state.dogecoin * 0.00001919,
     })}
    };
    

  state = {
    usd : null,
    gbp : null,
    btc : null,
    eth : null,
    dogecoin : null,
    tiValue: null,
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Image
            style={{ height:windowWidth*.2, width: windowWidth*.2}}
            source={{uri:'https://images-na.ssl-images-amazon.com/images/I/510WmeXkLXL.png'}}
          />
        </View>

        <View style={styles.bodyContainer1}> 
          <View style={styles.textInputCont}>
          <Text>USD : {this.state.usd}</Text>
            <TextInput
              defaultValue = " "
              placeholder = {" "}
              style={styles.txtBox}
              onChangeText={ (theText) => {
                this.setState({
                  usd : +(theText), 
                });
                }}
              
                />
            </View>

          <View style={styles.textInputCont}>
          <Text>GBP : {this.state.gbp}</Text>
            <TextInput
              defaultValue = " "
              placeholder = {" "}
              style={styles.txtBox}
              onChangeText={ (theText) => {
                this.setState({
                  gbp : +(theText),
                })
              }}
           />

              
          </View>

          <View style={styles.textInputCont}>
          <Text>btc : {this.state.btc}</Text>
            <TextInput
              defaultValue = " "
              placeholder = {" "}
              style={styles.txtBox}
              onChangeText={ (theText) => {
                this.setState({
                  btc : +(theText),
                })
              }}
            />
            
          </View>

          <View style={styles.textInputCont}>
          <Text>eth : {this.state.eth}</Text>
            <TextInput
              defaultValue = " "
              placeholder = {" "}
              style={styles.txtBox}
              onChangeText={ (theText) => {
                this.setState({
                  eth : +(theText),
                })
              }}
            />

                
          </View>

          <View style={styles.textInputCont}>
          <Text>DGX : {this.state.dogecoin}</Text>
            <TextInput
              defaultValue = " "
              placeholder = {" "}
              style={styles.txtBox}
              onChangeText={ (theText) => {
                this.setState({
                  dogecoin: +(theText),
                })
              }}
            />
          </View>

          <TouchableOpacity
          onPress={this.updateState}>
            <View style={styles.TouchableHighlight}>
              <Text style={styles.whiteText}>Convert!</Text>
            </View>
          </TouchableOpacity>

          <TouchableHighlight
          onPress={this.clear}>
            <View style={styles.TouchableHighlight}>
              <Text style={styles.whiteText}>Clear!</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  headerContainer: {
    height:windowHeight*.1,
    width: windowWidth,
    backgroundColor: '#8ACDEA',


    alignItems: 'center',
    justifyContent: 'center',
  },

  bodyContainer1:{
    height:windowHeight,

    width: windowWidth,
    backgroundColor: '#8ACDEA',


    alignItems: 'center',
    justifyContent: 'center',
  },


  headerText:{
    color: '#746D75',
    fontSize: 30,
  },

  textInputCont:{
    height: windowHeight/8,
    width: windowWidth * 2,

    color:'#8ACDEA',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,


  },

  txtBox:{
    height: 50, borderColor: 'gray', borderWidth: 1, margin: 5, color:'#746D75', backgroundColor:'#EDE6F2', width: 50,
  },

  TouchableHighlight:{
    height: windowHeight/15, borderColor: 'gray', borderWidth: 1, margin: 5, color:'#746D75', backgroundColor:'#EDE6F2', width: windowWidth*.5, textAlign: 'center',
  },

  whiteText:{
    color: '#000000',
    fontSize: 30,
  },
});
