import React, {Component} from 'react';
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
} from 'react-vr';

import Rocket from './Rocket';

const places = [
  {
    title: '1',
    image: 'pano1.jpg'
  },
  {
    title: '2',
    image: 'pano2.jpg'
  },
  {
    title: '3',
    image: 'pano3.jpg'
  },
  {
    title: '4',
    image: 'pano4.jpg'
  }

]


export default class Main extends Component {
  constructor(){
    super();
    this.state = {
      showMenu: false,
      place: 'pano1.jpg',
      showDemo: false,

    }
  }
  toggleMenu(){
    this.setState({showMenu: !this.state.showMenu})
  }
  demo(){
    this.setState({showDemo: !this.state.showDemo})
  }

  render() {
    return (
      <View style={styles.container}>

        <Pano source={asset(this.state.place)}></Pano>
        <PointLight style={{color:'white', transform:[{translate:[0,0,0]}]}}/>

        <Model
          style={{transform:[{translate: [0,-0.2,-5]}, {rotateY: 45}]}}
          source={{obj: asset('prism.obj'),mtl:asset('prism.mtl')}} lit={true}/>

        <VrButton style={styles.menuButton} onClick={() => this.toggleMenu()}>
          <Text style={styles.menuButtonText}>
            {this.state.showMenu ? 'exit' : 'CHANGE YOUR SPACE'}
          </Text>
        </VrButton>
        <VrButton style={styles.demo} onClick={() => this.demo()}>
          <Text style={styles.menuButtonText}>Demo</Text>
        </VrButton>
          {
            this.state.showDemo ?
              <View>
                {
                  <Rocket />
                }
              </View>
          :
          <View>
          </View>
        }

        {
          this.state.showMenu ?
            <View style={styles.menu}>
              {
                places.map((place, index) => {
                  return (
                    <VrButton style={styles.menuItem} key={index} onClick={() => this.setState({place: place.image })}>
                      <Text style={styles.menuItemText}>{place.title}</Text>
                    </VrButton>
                  )
                })
              }
            </View>
        :
        <View>
        </View>
        }
      </View>
    );
  }
};

const styles = StyleSheet.create({
  demo: {
    padding: 0.1,
    margin: 0.2,
    width: 1,
    height: 1,
    borderRadius: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b6b4b4',
    transform: [
      {translate: [5,5.3,-7.5]}
    ]
  },
  container: {
    alignItems: 'center',
    layoutOrigin: [0.5, 0],
  },
  menuButton: {
    padding: 0.1,
    margin: 0.2,
    backgroundColor: '#fff',
    borderRadius: 0.5,
    width: 1,
    height: 1,
    alignItems: 'center',
    justifyContent: 'center',
    transform: [
      {translate: [-5,4,-7.5]}
    ]
  },
  menu: {
    width: 5,
    height: 1.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    transform: [
      {translate: [0,5.5,-5]}
    ]
  },
  menuButtonText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 0.15,
    color: '#222',
  },
  menuItem: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 0.5,
    width: 0.5,
    height: 0.5,
    backgroundColor: '#fff'
  },
  menuItemText: {
    fontSize: 0.2,
    textAlign: 'center',
    color: '#222'
  }
});
