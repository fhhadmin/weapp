import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Checkbox } from '@tarojs/components'
import './cart.less'
import beaFood from '../../images/beaFood.jpg'
import newFood from '../../images/newFood.jpg'
import xia from '../../images/freshXia.jpg'
import shell from '../../images/shell.jpg'
import Counter from '../../components/counter/counter.js'

export default class Cart extends Component{
  constructor(){
    super()
    this.state = {
      goodsList: [
        {
          name: beaFood,
          title: '三都港 冷冻无公害黄花鱼',
          price: '￥45.00'
        },
        {
          name: xia,
          title: '京东海外直采 泰国活冻白虾',
          price: '￥99.00'
        },
        {
          name: shell,
          title: '獐子岛 冷冻蒜蓉粉丝扇贝',
          price: '￥21.60'
        },
        {
          name: newFood,
          title: '禧美 熟冻加拿大北极甜虾',
          price: '￥52.00'
        },
        {
          name: xia,
          title: '贝哥 冻煮裙边扇贝肉',
          price: '￥23.80'
        },
        {
          name: beaFood,
          title: '国联 大号翡翠生虾仁',
          price: '￥118.00'
        },
        {
          name: shell,
          title: '禧美 熟冻加拿大北极甜虾',
          price: '￥46.80'
        }
      ]
    }
  }
  config = {
    navigationBarTitleText: '购物车'
  }
  render(){
    const {goodsList} = this.state
    return(
      <View>
        <Checkbox-group>
          {goodsList.map(item => (
            <Checkbox key={item.name} className='checkbox'>
              <Image className='checkbox_img' src={item.name} />
              <View className='goodsInfo'>
                <Text className='goodsName'>{item.title}</Text>
                <View className='goodsDetail'>
                  <Text className='goods_price'>{item.price}</Text>
                  <Counter />
                </View>
              </View>
            </Checkbox>
          ))}
        </Checkbox-group>
      </View>
    )
  }
}
