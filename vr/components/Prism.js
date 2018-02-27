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


export default class Prism extends Component {
  constructor(){
    super()
    this.state = {
    }
  }
  render() {
    return (

      <View>
        <Model
          style={{transform:[{translate: [0,-0.2,-5]}, {rotateY: 45}]}}
          source={{obj: asset('prism.obj'),mtl:asset('prism.mtl')}} lit={true}/>
      </View>
    );
  }
};
