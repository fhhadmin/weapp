import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './index.less'
import img2 from '../../images/banner.jpg'
import img1 from '../../images/img1.png'
import img0 from '../../images/img2.png'
import fish from '../../images/fish.jpg'
import xia from '../../images/freshXia.jpg'
import shell from '../../images/shell.jpg'
import prawn from '../../images/prawn.jpg'
import ic_miaosha from '../../images/ic_miaosha.png'
import ic_pintuan from '../../images/ic_pintuan.png'
import ic_tejia from '../../images/ic_tejia.png'
import ic_all from '../../images/ic_all.png'
import temp_pintuan from '../../images/temp_pintuan.jpg'
import beaFood from '../../images/beaFood.jpg'
import newFood from '../../images/newFood.jpg'
import car from '../../images/ic_add_car.png'

import Swipers from '../../components/swiper/swiper.js'

export default class Index extends Component {
  constructor(){
    super(...arguments)
    this.state = {
      hour: '00',
      minute: '00',
      seconds: '00',
      imgList: [{src: img0},{src: img1},{src: img2}],
      miaosha: [
        {
          src: 'http://img.zcool.cn/community/01686758be556fa801219c777af126.jpg@1280w_1l_2o_100sh.png'
        },
        {
          src: 'http://img.zcool.cn/community/0163f65b8f7294a8012017ee5d2d3f.jpg@1280w_1l_2o_100sh.jpg'
        },
        {
          src: 'http://img.zcool.cn/community/01abe1582c924ba84a0d304f9775d0.jpg@1280w_1l_2o_100sh.jpg'
        }
      ],
      tejia: [
        {
          name: fish,
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
          name: xia,
          title: '禧美 熟冻加拿大北极甜虾',
          price: '￥52.00'
        },
        {
          name: shell,
          title: '贝哥 冻煮裙边扇贝肉',
          price: '￥23.80'
        },
        {
          name: prawn,
          title: '国联 大号翡翠生虾仁',
          price: '￥118.00'
        },
        {
          name: prawn,
          title: '国联 大号翡翠生虾仁',
          price: '￥118.00'
        },
        {
          name: xia,
          title: '禧美 熟冻加拿大北极甜虾',
          price: '￥46.80'
        }
      ]
    }
  }
  config = {
    navigationBarTitleText: '首页',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {imgList,
      hour,
      minute,
      seconds,
      miaosha
    } = this.state
    return (
      <View className='index'>
        <Swipers swiperList={imgList} swiperClass='index_swiper' swiperItemClass='index_swiper_item' swiperImgClass='index_swiper_item_img' />
        <View className='float-panel'>
          <View className='panel-item'>
            <Image className='panel-item-img' src={ic_miaosha} />
            <Text className='panel-item-text'>每日秒杀</Text>
          </View>
          <View className='panel-item'>
            <Image className='panel-item-img' src={ic_pintuan} />
            <Text className='panel-item-text'>拼团</Text>
          </View>
          <View className='panel-item'>
            <Image className='panel-item-img' src={ic_tejia} />
            <Text className='panel-item-text'>今日特价</Text>
          </View>
          <View className='panel-item'>
            <Image className='panel-item-img' src={ic_all} />
            <Text className='panel-item-text'>全部商品</Text>
          </View>
        </View>
        <View className='miaosha'>
          <View>限时秒杀-距
            <Text className='miaosha-next'>20:00</Text>场仅剩
            <Text className='miaosha-time'>{hour}</Text>
            <Text className='miaosha-time'>{minute}</Text>
            <Text className='miaosha-time'>{seconds}</Text>
          </View>
          <View className='more'>更多></View>
        </View>
        <View className='miaosha_img'>
          <Swipers swiperList={miaosha} swiperClass='miaosha_list' swiperItemClass='miaosha_list_item' swiperImgClass='miaosha_list_item_img'  />
        </View>
        <View className='pintuan'>
          <Image className='pintuan_img' src={temp_pintuan} />
        </View>
        <View className='new'>
          <Text className='new_title'>———————— 新品上市 ————————</Text>
          <View className='newArrival'>
            <View className='newArrivalFood'><Image className='newArrivalFood_img' src={beaFood} /></View>
            <View className='newArrivalFood'><Image className='newArrivalFood_img' src={newFood} /></View>
          </View>
        </View>
        <View className='tejia'>
          <Text className='new_title'>———————— 今日特价 ————————</Text>
          <View className='tejia_goods'>
            {this.state.tejia.map(img => (
              <View className='tejia_item' key={img.name}>
                <Image className='tejia_img' src={img.name} />
                <Text className='tejia_text'>{img.title}</Text>
                <View className='tejia_info'>
                  <Text className='tejia_price'>{img.price}</Text>
                  <Image className='tejia_car' src={car} />
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    )
  }
}
