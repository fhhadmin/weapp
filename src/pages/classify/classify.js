import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './Classify.less'

export default class Classify extends Component{

  config = {
    navigationBarTitleText: '购物车'
  }
  render(){
    return(
      <View>海鲜分类</View>
    )
  }
}
