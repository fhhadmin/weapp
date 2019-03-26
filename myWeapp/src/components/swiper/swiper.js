import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'

// import img2 from '../../images/banner.jpg'
// import img1 from '../../images/img1.png'
// import img0 from '../../images/img2.png'
import './swiper.less'

export default class Swipers extends Component {
  render () {
    const {
      swiperList,
      swiperClass='',
      swiperItemClass='',
      swiperImgClass=''
    } = this.props
    return (
      <View className='index'>
        <Swiper className={swiperClass}>
          {swiperList.map(img => (
            <SwiperItem key={img.src} className={swiperItemClass}>
              <Image src={img.src} className={swiperImgClass} />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    )
  }
}
