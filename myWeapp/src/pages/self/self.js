import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './self.less'

export default class Self extends Component{

  config = {
    navigationBarTitleText: '购物车'
  }
  render(){
    return(
      <View>我的海鲜</View>
    )
  }
}
