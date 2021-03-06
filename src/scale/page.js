import React, {Component} from 'react'
import {View, Animated, TouchableWithoutFeedback} from 'react-native'
import styles from './styles'

export default function page  (props) {
  const {animation, startAnimation} =props
  const animatedStyles ={
    transform: [
     { scale : animation }
    ]
  }
    return (
      <View  style={styles.container}>
        <TouchableWithoutFeedback onPress={startAnimation}>
            <Animated.View easing={'linear'} iterationCount= {'infinite'} style={[styles.box, animatedStyles]}/>
        </TouchableWithoutFeedback>
      </View>
    )
  
}