import React from 'react'
import {Animated} from 'react-native'
import Page from './page'
export default class demo1 extends React.PureComponent {
  constructor(props){
    super(props)
    this.state={
      animation: new Animated.Value(1)
    }
  }
  startAnimation =()=> {
    Animated.timing(this.state.animation, {
      toValue: -2,
      duration: 1500
    }).start((()=>{
      Animated.timing(this.state.animation, {
        toValue: 1,
        duration: 1500
      }).start()
    }))
  }
  render() {
    return (
      <Page startAnimation={this.startAnimation} animation={this.state.animation}/>
    )
  }
}