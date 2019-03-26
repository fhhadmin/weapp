import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/verification/verification',
      'pages/index/index',
      'pages/cart/cart',
      'pages/classify/classify',
      'pages/self/self'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#33CCFF',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      list:[
        {
          pagePath: 'pages/index/index',
          text: '首页',
          iconPath: './images/ic_tab_home.png',
          selectedIconPath: './images/ic_tab_home_select.png'
        },
        {
          pagePath: 'pages/cart/cart',
          text: '购物车',
          iconPath: './images/ic_tab_car.png',
          selectedIconPath: './images/ic_tab_car_select.png'
        },
        {
          pagePath: 'pages/classify/classify',
          text: '海鲜分类',
          iconPath: './images/ic_tab_cate.png',
          selectedIconPath: './images/ic_tab_cate_select.png'
        },
        {
          pagePath: 'pages/self/self',
          text: '我的海鲜',
          iconPath: './images/ic_tab_mine.png',
          selectedIconPath: './images/ic_tab_mine_select.png'
        }
      ],
      selectedColor: '#33CCFF'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
