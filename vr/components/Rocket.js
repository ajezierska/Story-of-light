import React, {Component} from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  PointLight,
  AmbientLight,
  Model,
  VrButton,
} from 'react-vr';

const style={
  backgroundColor: 'red',
  fontSize: 0.8,
  fontWeight: '400',
  layoutOrigin: [0.5, 0.5],
  padding: 0.2,
  margin:0.2,
  textAlign: 'center',
  textAlignVertical: 'center',
  width: '100px',

  transform: [{translate: [1.5, 7, -8]}],
}

export default class Rocket extends Component {
  constructor(){
    super()
    this.state = {
      moveSpeed: 0,
    }
    this.enterTime = Date.now();
    this.handleClick2 = this.handleClick2.bind(this)
  }


  handleClick2 () {
    const now = Date.now();
    const change = now - this.enterTime;
    this.setState({moveSpeed: this.state.moveSpeed + change/3000})
    this.frameHandleMove = requestAnimationFrame(this.handleClick2)
  }

  render() {
    let movement = this.state.moveSpeed
    return (
      <View>
        <Model
          style={{transform:[{translate:[0,10,-30]},{translateZ: movement},{scale:0.8},{rotateX: 20}]}}
          source={{obj: asset('rakieta2.obj'),mtl:asset('rakieta2.mtl')}}/>

        <Model
          style={{transform:[{translate:[5,10,-30]},{translateZ: movement},{scale:0.8},{rotateX: 20}]}}
          source={{obj: asset('rakieta2.obj'),mtl:asset('rakieta2.mtl')}}/>

          <VrButton onClick={this.handleClick2.bind(this)}>
            <Text style={style}>
              Fire!!!
            </Text>
          </VrButton>
        <Model
          style={{transform:[{translate:[2,2,-9]},{translateZ: movement},{scale:0.8}]}}
          source={{obj: asset('rakieta2.obj'),mtl:asset('rakieta2.mtl')}}/>
      </View>
    );
  }
};
