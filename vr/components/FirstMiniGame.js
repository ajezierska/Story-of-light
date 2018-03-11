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
      time: 20,
      saveScore: 0,
      timeColor: '#ccc',
    }
  }

  componentDidMount(){
    AsyncStorage.getItem('score')
      .then(value => {
        console.log('score', value);
        this.setState({saveScore: value});
      })

    this.intervalID = setInterval(() => {
      this.setState({showShape: !this.state.showShape})
    }, 1000);


      this.intervalTime = setInterval(() => {
          if(this.state.time == 0){
              this.setState({time: 20, score: 0, saveScore: this.state.score})
          }else {
            this.setState({time: this.state.time - 1});
          }

          if(this.state.time < 10){
            this.setState({timeColor: 'red'})
          }else {
            this.setState({timeColor: 'white'})
          }
      }, 1000);


    this.newGameSet();
  }
  componentWillUnmount(){
   clearInterval(this.intervalID);
   clearInterval(this.intervalTime);
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



    for (let i = 0; i < this.state.gameShape.length; i++) {
      newGameShapes[i] = baseShapeId;
      let randomIndex = Math.floor(Math.random() * colors.length);

    }

    let specialIndex = Math.floor(Math.random() * newGameShapes.length)

    newGameShapes[specialIndex] = specialShapeId;


    this.setState({
      gameShape: newGameShapes,
      specialIndex: specialIndex,
    });
  }

  render() {
    return (
      <View style={styles.game}>


        <SpotLight style={{color: 'white', transform: [{translate: [100, 400, 700]}]}} />
        <Text style={styles.text}>What is deifference ?</Text>
        <Text style={[styles.text, {color: '#222', fontSize: 0.3}]}>your last score: {this.state.saveScore} ! be faster !</Text>
        <Text style={[styles.text, {color: '#ccc', fontSize: 0.4 }]}>score: {this.state.score}</Text>

        <Text style={[styles.text, {color: this.state.timeColor, fontSize: 0.4 }]}>time: {this.state.time}</Text>

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
  },
  alarmText: {
    color: 'red',
  }
})
