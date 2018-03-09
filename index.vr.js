import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  StyleSheet,
  VrButton,
  Cylinder,
  PointLight,
  Model,
  Animated,
  AmbientLight,
} from 'react-vr';

import Main from './vr/components/Main'
import Rocket from './vr/components/Rocket'



class PrismGame extends React.Component {
  constructor(){
    super();
    this.state = {
      color: '#222',
      showSign: true,
      showPlay: false,
    }
    var si = setInterval(() => {
      let colors = ['#8e8e8e','#aaa','#fff','#555', '#383838','#1c1c1c','#0e0e0e','#474747','#222'];

      let randomIndex = Math.floor(Math.random() *colors.length);
      this.setState({showSign: !this.state.showSign, color: colors[randomIndex]})
}, 200);

  };
  play(){
    this.setState({showPlay: !this.state.showPlay})
  }

  handleClick1 () {
    console.log('blop');
    this.setState({color: '#fff', showSign: true});
    clearInterval(this.si);
  }

  render() {
    let message = this.state.showSign === true ? 'Story of light': " ";
    return (
      <View>

      {
        this.state.showPlay ?
          <View>
            {
              <Main />
            }
          </View>
      :
      <View>
      {
        <View>
          <AmbientLight intensity={1} color="red" />
          <PointLight style={{color: 'white', transform: [{translate: [0, 400, 700]}]}} />
          <VrButton style={indexStyles.vrButton} onClick={this.handleClick1.bind(this)} >
            <Text style={[{color: this.state.color}, indexStyles.intro]}>{message}</Text>
          </VrButton>
          <VrButton style={[{borderColor: this.state.color}, indexStyles.circleBtn]} onClick={() => this.play()}>
            <Text style={indexStyles.circleBtnTxt}>
              PLAY
            </Text>
          </VrButton>
        </View>
      }
      </View>
    }
    </View>




    )
  }
};

const indexStyles = StyleSheet.create({
  intro: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 1,

  },
  vrButton: {
    layoutOrigin: [0.5, 0.5],
    padding: 0.2,
    width: 7,
    height: 2,
    transform: [
      {translate: [0,0.5,-7.5]}
    ]
  },
  circleBtn: {
    layoutOrigin: [0.5, 0.5],
    padding: 0.2,
    width: 2,
    height: 2,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 0.05,
    transform: [
      {translate: [0,0.7,-7.5]}
    ]
  },
  circleBtnTxt: {
    textAlign: 'center',
    justifyContent: 'center',
    color: '#8e8e8e',
    fontSize: 0.5,
    fontWeight:'100',
    transform: [
      {translate: [0,0.05,0]}
    ]
  }
})





AppRegistry.registerComponent('PrismGame', () => PrismGame);
