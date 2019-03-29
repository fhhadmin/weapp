import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input } from '@tarojs/components'
import './counter.less'

export default class Counter extends Component {
  constructor(){
    super()
    this.state={
      counter: 1
    }
  }
  add(e){
    e.stopPropagation()
    const num = this.state.counter + 1
    this.setState({
      counter: num
    })
  }
  dec(e){
    e.stopPropagation()
    const num = this.state.counter - 1
    if (num >= 0) {
      this.setState({
        counter: num
      })
    }
  }
  render(){
    return(
      <View className='counter_view'>
        <Text className='counter_action' onClick={this.dec}>-</Text>
        <View className='counter'><Text className='counter_action'>{this.state.counter}</Text></View>
        <Text className='counter_action' onClick={this.add}>+</Text>
      </View>
    )
  }
}
