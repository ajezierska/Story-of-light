import React, {Component} from 'react';
import {
  Box,
  Sphere,
  Cylinder,
  Animated
} from 'react-vr';

const shapes = [Box, Sphere, Cylinder];
let colors = ['#fff','#0e0e0e','#ccc','#222'];

export { shapes, colors };

export default class Shape extends Component {
  render(){
    let Component = shapes[this.props.shapeNum];
    let randomIndex = Math.floor(Math.random() * colors.length);


    return (
      <Component
      style={{
        color: colors[randomIndex],
        transform: this.props.transform
      }} wireframe={true}  />
    )
  }

};
