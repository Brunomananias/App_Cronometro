import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';

class App extends Component{

constructor(props){
  super(props);
    this.state = {
      numero: 0,
      botao: 'VAI',
      ultimo: null
    };

    this.iniciar = this.iniciar.bind(this);
    this.limpar = this.limpar.bind(this);
  }

iniciar(){

  if(this.timer != null){
    //aqui vai parar o timer
    this.setState({botao: "VAI"})
    clearInterval(this.timer);
    this.timer = null;
  }else{
    this.setState({botao: "Pausar"})
    this.timer = setInterval( ()=>{
      this.setState({numero: this.state.numero + 0.1})
    }, 100);
  }
}

limpar(){
  if(this.timer != null){
    clearInterval(this.timer);
    this.timer = null;

  }
  this.setState({
    ultimo: this.state.numero,
    numero: 0,
    botao: 'VAI'
  })
  
}

  render(){
    return(
      <View style={styles.container}>
        <Image
          source={require('./src/cronometro.png')}
          style={styles.cronometro}
        />

        <Text style={styles.timer}>{this.state.numero.toFixed(1)}</Text>

      <View style={styles.btnArea}>

        <TouchableOpacity style={styles.btn} onPress={this.iniciar}>
          <Text style={styles.btnText}>{this.state.botao}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btn} onPress={this.limpar}>
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.areaUltima}>
      <Text style={styles.textoCorrida}>
        {this.state.ultimo > 0 ? 'Ultimo tempo: '+ this.state.ultimo.toFixed(1) : ''}
        </Text>
      </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#00aeef'
  },
  timer:{
    marginTop: -180,
    color: 'white',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 90,
    height: 40
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  areaUltima:{
    marginTop: 40
  },
  textoCorrida:{
    fontSize: 25,
    fontStyle: 'italic',
    color: 'white'
  }
})

export default App;

