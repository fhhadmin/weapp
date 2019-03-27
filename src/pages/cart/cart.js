import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, CheckboxGroup, Checkbox, Radio, Button } from '@tarojs/components'
import './cart.less'
import beaFood from '../../images/beaFood.jpg'
import newFood from '../../images/newFood.jpg'
import xia from '../../images/freshXia.jpg'
import shell from '../../images/shell.jpg'
import Counter from '../../components/counter/counter.js'

export default class Cart extends Component{
  constructor(props){
    super(props)
    this.state = {
      totalMoney: 0
    },
    this.goodsList = [
      {
        img: beaFood,
        title: '三都港 冷冻无公害黄花鱼',
        price: '45.00',
        checked: false,
        num: 1
      },
      {
        img: xia,
        title: '京东海外直采 泰国活冻白虾',
        price: '99.00',
        checked: false,
        num: 1
      },
      {
        img: shell,
        title: '獐子岛 冷冻蒜蓉粉丝扇贝',
        price: '21.60',
        checked: false,
        num: 1
      },
      {
        img: newFood,
        title: '禧美 熟冻加拿大北极甜虾',
        price: '52.00',
        checked: false,
        num: 1
      },
      {
        img: xia,
        title: '贝哥 冻煮裙边扇贝肉',
        price: '23.80',
        checked: false,
        num: 1
      },
      {
        img: beaFood,
        title: '国联 大号翡翠生虾仁',
        price: '118.00',
        checked: false,
        num: 1
      },
      {
        img: shell,
        title: '禧美 熟冻加拿大北极甜虾',
        price: '46.80',
        checked: false,
        num: 1
      }
    ],
    this.sumMoney = 0
  }
  config = {
    navigationBarTitleText: '购物车'
  }
  checkbox(e){
    console.log(e)
    if(e.target.value.length > 0){
      e.target.value.map((item, index) => {
        this.goodsList[index].checked = true
        this.moneySum()
      })
    }else{
      this.goodsList.map((item,index) => {
        this.goodsList[index].checked = false
      })
    }
    this.setState({
      totalMoney:this.sumMoney
    })
  }
  moneySum(){
    this.goodsList.map((item, index) =>{
      if(this.goodsList[index].checked === true){
        this.sumMoney += this.goodsList[index].price * this.goodsList[index].num
        console.log(this.sumMoney,'sumMoney')
      }
    })

    this.setState({
      totalMoney:this.sumMoney
    })
  }
  addNum = (counter, e) => {
    this.goodsList[e.detail.value[0].index].num = counter.num
    this.moneySum()
  }
  decNum = (counter, e) => {
    this.goodsList[e.detail.value[0].index].num = counter.num
    this.moneySum()
  }
  render(){
    const {totalMoney} = this.state
    return(
      <View>
        <CheckboxGroup  onChange={this.checkbox}>
          {this.goodsList.map((item, index) => (
            <Checkbox key={item.img} className='checkbox' value={index}>
              <Image className='checkbox_img' src={item.img} />
              <View className='goodsInfo'>
                <Text className='goodsName'>{item.title}</Text>
                <View className='goodsDetail'>
                  <Text className='goods_price'>￥{item.price}</Text>
                  <Counter onDec={this.decNum} indexValue={index} onAdd={this.addNum} />
                </View>
              </View>
            </Checkbox>
          ))}
        </CheckboxGroup>
        <View className='action'>
          <Radio className='actionAll'>全选</Radio>
          <Text className='action_text'>合计:￥{totalMoney}</Text>
          <Button className='action_button'>结 算</Button>
        </View>
      </View>
    )
  }
}
