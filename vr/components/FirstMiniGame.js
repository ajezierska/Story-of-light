import React, {Component} from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
  StyleSheet,
  VrButton,
  AsyncStorage,
  SpotLight,
  Animated
} from 'react-vr';
import Shape, {shapes, colors} from './Shapes'

export default class FirstMiniGame extends React.Component {
  constructor() {
    super();
    this.state = {
      gameShape: [1,1,1,1,1],
      score: 0,
      specialIndex: 0,
      showShape: true,
      time: 0,
    }
  }

  componentDidMount(){


    AsyncStorage.getItem('score')
      .then(value => {
        console.log('score', value);
        this.setState({score: value});
      })

    // AsyncStorage.getItem('time')
    //   .then(value => {
    //     console.log('time', value);
    //     this.setState({time: value});
    //   })
    //
    // AsyncStorage.setItem('time', time)



    var si = setInterval(() => {
      this.setState({showShape: !this.state.showShape})
    }, 1000);



    var siTime = setInterval(() => {
      this.setState({time: this.state.time + 1})
    }, 1000);

    this.newGameSet();
  }


  pickShape(shapeIndex) {

    let score = this.state.score;

    score = this.state.specialIndex === shapeIndex ? score + 1 : score - 1 ;

    this.setState({score});

    AsyncStorage.setItem('score', score)

    this.newGameSet();
  }

  newGameSet(){

    let baseShapeId = Math.floor(Math.random() * shapes.length);

    let specialShapeId = baseShapeId;

    while (specialShapeId === baseShapeId){
      specialShapeId = Math.floor(Math.random() * shapes.length)
    }

    let newGameShapes = [];
    let newColors = [];


    for (let i = 0; i < this.state.gameShape.length; i++) {
      newGameShapes[i] = baseShapeId;
      let randomIndex = Math.floor(Math.random() * colors.length);
      newColors[i] = randomIndex;
    }

    let specialIndex = Math.floor(Math.random() * newGameShapes.length)

    newGameShapes[specialIndex] = specialShapeId;


    this.setState({
      gameShape: newGameShapes,
      specialIndex: specialIndex,
      gameColors: newColors,
    });



    console.log(newColors);
    console.log(colors);
  }

  render() {
    return (
      <View style={styles.game}>


        <SpotLight style={{color: 'white', transform: [{translate: [100, 400, 700]}]}} />
        <Text style={styles.text}>What is deifference ?</Text>
        <Text style={styles.text}>{this.state.score}</Text>
        <Text style={styles.text}>time: {this.state.time}</Text>

        {
          this.state.gameShape.map((shape, index) => {
            return (
              <View key={index}>

                  {
                    this.state.showShape ?
                    <View>
                      {
                        <VrButton key={index} onClick={() => this.pickShape(index)}>
                          <Shape
                            shapeNum={shape}
                            transform={[{translate: [(index-1)*2,0,(Math.abs((index-2)*-2))-9]}]}
                            colorNum={colors}
                          />
                        </VrButton>
                      }
                    </View>
                      :
                    <View>
                    </View>
                  }
                </View>
              )
            })
          }
          </View>
        )
      }
    };



const styles = StyleSheet.create({
  game: {
    transform: [
      {translate: [-2.25,0,0]}
    ]
  },
  text: {
    fontSize: 0.5,
    textAlign: 'center',
    color: '#fff',
    transform: [
      {translate: [0,2,-5]}
    ]
  }
})
