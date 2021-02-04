import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions, useState} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;



export default class App extends Component{
  updateStateUSD = () => {
      this.setState({ 
        gbp: 0.0,
        btc: 0.0,
        eth: 0.0,
        dogecoin: 0.0,


        gbp: this.state.usd * .75,
        btc: this.state.usd * .000032,
        eth: this.state.usd * .00075,
        dogecoin: this.state.usd * 124.49,

        usd: 0.0,
     })};


    updateStateGBP = () => { 
      this.setState({
        usd:0.0,
        btc: 0.0,
        eth: 0.0,
        dogecoin: 0.0,


        usd: this.state.gbp * 1.37,
        btc: this.state.gbp * 0.000042,
        eth: this.state.gbp * 0.0010,
        dogecoin: this.state.gbp * 187.48,

        gbp:0.0,
      })};
    
      updateStateBTC = () =>{
      this.setState({ 
        usd: 0.0,
        gbp: 0.0,
        eth: 0.0,
        dogecoin: 0.0,

        usd: this.state.btc * 31863,
        gbp: this.state.btc * 23268.78,
        eth: this.state.btc * 27.78,
        dogecoin: this.state.btc * 4026848.16,

        BTC: 0.0,
     })};
     
     updateStateETH = () =>{
      this.setState({
        usd: 0.0,
        gbp: 0.0,
        btc: 0.0,
        dogecoin: 0.0,

        usd: this.state.eth * 1335,
        gbp: this.state.eth * 974.60,
        btc: this.state.eth * .042,
        dogecoin: this.state.etc * 94354,

        eth: 0.0,
     })};

     updateStateDGX = () =>{ 
      this.setState({ 
        usd: 0.0,
        gbp: 0.0,
        btc: 0.0,
        eth: 0.0,

        usd: this.state.dogecoin * 0.049,
        gbp: this.state.dogecoin * 0.03001398,
        btc: this.state.dogecoin * 0.00000118,
        eth: this.state.dogecoin * 0.00001919,

        dogecoin: 0.0,
     })};
  
    

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
            style={{ height:windowWidth/9, width: windowWidth/9}}
            source={{uri:'https://images-na.ssl-images-amazon.com/images/I/510WmeXkLXL.png'}}
          />
        </View>

        <View style={styles.bodyContainer1}> 
          <View style={styles.textInputCont}>
          <Text>USD : {this.state.usd}</Text>
            <TextInput
              placeholder = "USD"
              style={styles.txtBox}
              onChangeText={ (theText) => {
                this.setState({
                  usd : +(theText),  
                })
                this.updateStateUSD();
                }}
              
            />

             
          </View>

          <View style={styles.textInputCont}>
          <Text>GBP : {this.state.gbp}</Text>
            <TextInput
              defaultValue = {this.state.gbp}
              placeholder = "GBP"
              style={styles.txtBox}
              onChangeText={ (theText) => {
                this.setState({
                  gbp : +(theText),
                })
                this.updateStateGBP();
              }}
           />

              
          </View>

          <View style={styles.textInputCont}>
          <Text>btc : {this.state.btc}</Text>
            <TextInput
              defaultValue = {this.state.btc}
              placeholder = "BTC"
              style={styles.txtBox}
              onChangeText={ (theText) => {
                this.setState({
                  btc : +(theText),
                })
                
                this.updateStateBTC();
              }}
            />
            
          </View>

          <View style={styles.textInputCont}>
          <Text>eth : {this.state.eth}</Text>
            <TextInput
              defaultValue = {this.state.eth}
              placeholder = "ETH"
              style={styles.txtBox}
              onChangeText={ (theText) => {
                this.setState({
                  eth : +(theText),
                  
                })
                this.updateStateETH();
              }}
            />

                
          </View>

          <View style={styles.textInputCont}>
          <Text>DGX : {this.state.dogecoin}</Text>
            <TextInput
              defaultValue = {this.state.dogecoin}
              placeholder = "Doge Coin"
              style={styles.txtBox}
              onChangeText={ (theText) => {
                this.setState({
             
                  dogecoin: +(theText),
                })
                
                this.updateStateDGX();
              }}
            />
          </View>
        </View>
      </View>
    );  
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerContainer: {
    height:windowHeight/2,
    width: windowWidth,
    backgroundColor: '#8ACDEA',


    alignItems: 'center',
    justifyContent: 'center',
  },

  bodyContainer1:{
    height:windowHeight*.5,

    width: windowWidth,
    backgroundColor: '#8ACDEA',


    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText:{
    color: '#746D75',
    fonstSize: 30,
    fontStyle: 'bold',
  },

  textInputCont:{
    height: windowHeight/2/8,
    width: windowWidth*.75,

    color:'#8ACDEA',
    alignItems: 'center',
    justifyContent: 'center',


  },

  txtBox:{
    height: 50, borderColor: 'gray', borderWidth: 1, margin: 10, color:'#746D75', backgroundColor:'#EDE6F2', width: 50,
  },
});
