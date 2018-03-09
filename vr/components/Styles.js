import React, {Component} from 'react';
import {
  StyleSheet,
} from 'react-vr';


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
