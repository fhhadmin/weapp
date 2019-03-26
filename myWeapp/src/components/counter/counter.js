import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './counter.less'

export default class Counter extends Component {
  constructor(){
    super()
    this.state={}
    this.counter = 1
  }

  render(){
    return(
      <View className='counter_view'>
        <Text className='counter_dec'>-</Text>
        <View className='counter_num'><Text>{this.counter}</Text></View>
        <Text className='counter_add'>+</Text>
      </View>
    )
  }
}
