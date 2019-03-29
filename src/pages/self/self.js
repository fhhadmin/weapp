import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button } from '@tarojs/components'
import bg from '../../images/bg.jpg'
import icon1 from '../../images/icon1.png'
import icon2 from '../../images/icon2.png'
import icon3 from '../../images/icon3.png'
import icon4 from '../../images/icon4.png'
import icon5 from '../../images/icon5.png'
import action1 from '../../images/action1.png'
import action2 from '../../images/action2.png'
import action3 from '../../images/action3.png'
import action4 from '../../images/action4.png'
import './self.less'

export default class Self extends Component{
  constructor(){
    super()
    this.state = {
      orderDemo: [
        {
          src: icon1,
          name: '待收货'
        },
        {
          src: icon2,
          name: '待发货'
        },
        {
          src: icon3,
          name: '待收货'
        },
        {
          src: icon4,
          name: '评价'
        },
        {
          src: icon5,
          name: '退款/售后'
        },
      ],
      demoList: [
        {
          src: action1,
          name: '联系客服'
        },
        {
          src: action2,
          name: '消息'
        },
        {
          src: action3,
          name: '设置'
        },
        {
          src: action4,
          name: '消息反馈'
        },
        {
          src: action1,
          name: '联系客服'
        },
        {
          src: action2,
          name: '消息'
        },
        {
          src: action3,
          name: '设置'
        },
        {
          src: action4,
          name: '消息反馈'
        }
      ]
    }
  }
  config = {
    navigationBarTitleText: '个人中心'
  }
  componentWillMount(){
    Taro.getStorage({key:'userInfo'}).then(res => {
      console.log(res,'res')
    })
  }
  login(){

  }
  render(){
    const { orderDemo, demoList } = this.state
    return(
      <View className='page'>
        <View className='self_header'>
          <View>
            <Image className='header_img' src={bg} mode='aspectFill' />
          </View>
          <View className='header_text'>尚未登录，请<Text className='header_login'>登录</Text></View>
        </View>
        <View className='order'>
          <View className='order_text'><Text>我的订单</Text><Text className='order_view'>查看全部订单></Text></View>
          <View className='order_info'>
            {orderDemo.map(item => (
              <View className='orderList' key>
                <Image className='order_img' src={item.src} />
                <Text className='orderList_text'>{item.name}</Text>
              </View>
            ))}
          </View>
        </View>
        <View className='order_demo'>
          {demoList.map(item => (
            <View className='demo_panel' key>
              <Image className='demo_img' src={item.src} />
              <Text className='demo_text'>{item.name}</Text>
            </View>
          ))}
        </View>
      </View>
    )
  }
}
