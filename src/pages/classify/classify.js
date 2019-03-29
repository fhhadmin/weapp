import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import './Classify.less'
import picture2 from '../../images/picture2.jpg'
import picture1 from '../../images/picture1.jpg'
import picture3 from '../../images/picture3.jpg'
export default class Classify extends Component{
  constructor(){
    super()
    this.state = {
      categoryList: [
        {
          category: '鱼类（冰鲜）',
          pic: picture2,
          goodsList: [
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3998181588,425563150&fm=27&gp=0.jpg',
              name: '斑点热带鱼'
            },
            {
              src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2849507766,251883413&fm=27&gp=0.jpg',
              name: '鲳鱼'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3998181588,425563150&fm=27&gp=0.jpg',
              name: '斑点热带鱼'
            },
            {
              src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2849507766,251883413&fm=27&gp=0.jpg',
              name: '鲳鱼'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3998181588,425563150&fm=27&gp=0.jpg',
              name: '斑点热带鱼'
            },
            {
              src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2849507766,251883413&fm=27&gp=0.jpg',
              name: '鲳鱼'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3998181588,425563150&fm=27&gp=0.jpg',
              name: '斑点热带鱼'
            },
            {
              src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2849507766,251883413&fm=27&gp=0.jpg',
              name: '鲳鱼'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3998181588,425563150&fm=27&gp=0.jpg',
              name: '斑点热带鱼'
            },
            {
              src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2849507766,251883413&fm=27&gp=0.jpg',
              name: '鲳鱼'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3998181588,425563150&fm=27&gp=0.jpg',
              name: '斑点热带鱼'
            },
            {
              src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2849507766,251883413&fm=27&gp=0.jpg',
              name: '鲳鱼'
            }
          ]
        },
        {
          category: '虾类',
          pic: picture1,
          goodsList: [
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1001211325,3069594953&fm=27&gp=0.jpg',
              name: '虾魁'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3600379561,3754563909&fm=27&gp=0.jpg',
              name: '大虾'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2634631772,3882791790&fm=27&gp=0.jpg',
              name: '龙头虾'
            },
            {
              src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2580356831,349455184&fm=85&app=52&f=JPEG?w=121&h=75&s=37C7D8124A396684A39A4AEE0300B02A',
              name: '大龙虾'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1001211325,3069594953&fm=27&gp=0.jpg',
              name: '虾魁'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3600379561,3754563909&fm=27&gp=0.jpg',
              name: '大虾'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2634631772,3882791790&fm=27&gp=0.jpg',
              name: '龙头虾'
            },
            {
              src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2580356831,349455184&fm=85&app=52&f=JPEG?w=121&h=75&s=37C7D8124A396684A39A4AEE0300B02A',
              name: '大龙虾'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1001211325,3069594953&fm=27&gp=0.jpg',
              name: '虾魁'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3600379561,3754563909&fm=27&gp=0.jpg',
              name: '大虾'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2634631772,3882791790&fm=27&gp=0.jpg',
              name: '龙头虾'
            },
            {
              src: 'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2580356831,349455184&fm=85&app=52&f=JPEG?w=121&h=75&s=37C7D8124A396684A39A4AEE0300B02A',
              name: '大龙虾'
            },
          ]
        },
        {
          category: '鱼类（鲜活）',
          pic: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2228080009,2870427676&fm=27&gp=0.jpg',
          goodsList: [
            {
              src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=526100482,3203307766&fm=26&gp=0.jpg',
              name: '平鱼'
            },
            {
              src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2849507766,251883413&fm=27&gp=0.jpg',
              name: '鲳鱼'
            },
            {
              src: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3801693000,4048695293&fm=85&app=52&f=JPEG?w=121&h=75&s=B9B1C913551A77C25E7480DE0100E0B3',
              name: '鲈鱼'
            },
            {
              src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2849507766,251883413&fm=27&gp=0.jpg',
              name: '鲳鱼'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3998181588,425563150&fm=27&gp=0.jpg',
              name: '斑点热带鱼'
            },
            {
              src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=526100482,3203307766&fm=26&gp=0.jpg',
              name: '平鱼'
            },
            {
              src: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3801693000,4048695293&fm=85&app=52&f=JPEG?w=121&h=75&s=B9B1C913551A77C25E7480DE0100E0B3',
              name: '鲈鱼'
            },
            {
              src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2849507766,251883413&fm=27&gp=0.jpg',
              name: '鲳鱼'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3998181588,425563150&fm=27&gp=0.jpg',
              name: '斑点热带鱼'
            },
            {
              src: 'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3801693000,4048695293&fm=85&app=52&f=JPEG?w=121&h=75&s=B9B1C913551A77C25E7480DE0100E0B3',
              name: '鲈鱼'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3998181588,425563150&fm=27&gp=0.jpg',
              name: '斑点热带鱼'
            },
            {
              src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=526100482,3203307766&fm=26&gp=0.jpg',
              name: '平鱼'
            }
          ]
        },
        {
          category: '贝类（活鲜）',
          pic: 'http://dpic.tiankong.com/tv/m5/QJ8199614263.jpg',
          goodsList: [
            {
              src: 'http://dpic.tiankong.com/hg/ds/QJ6111108073.jpg',
              name: '扇贝'
            },
            {
              src: 'http://dpic.tiankong.com/gg/5h/QJ6282339327.jpg',
              name: '海蚌'
            },
            {
              src: 'http://dpic.tiankong.com/03/xs/QJ6739228944.jpg',
              name: '贻贝'
            },
            {
              src: 'http://dpic.tiankong.com/ba/fg/QJ9123631190.jpg',
              name: '牡蛎'
            },
            {
              src: 'http://dpic.tiankong.com/ed/ta/QJ6316711130.jpg',
              name: '文蛤'
            },
            {
              src: 'http://dpic.tiankong.com/nr/x5/QJ6344702639.jpg',
              name: '象拔蚌'
            },
            {
              src: 'http://dpic.tiankong.com/xh/1l/QJ6136871230.jpg',
              name: '蚬子'
            },
            {
              src: 'http://dpic.tiankong.com/m7/tb/QJ6673882507.jpg',
              name: '鲜贝'
            },
            {
              src: 'http://dpic.tiankong.com/cs/8w/QJ6312297479.jpg',
              name: '河蚌'
            },
            {
              src: 'http://dpic.tiankong.com/m7/tb/QJ6673882507.jpg',
              name: '瑶柱'
            },
            {
              src: 'http://dpic.tiankong.com/td/jn/QJ6104282327.jpg',
              name: '螺蛳'
            },
            {
              src: 'http://dpic.tiankong.com/nz/it/QJ7100672431.jpg',
              name: '海瓜子'
            },
            {
              src: 'http://dpic.tiankong.com/m7/tb/QJ6673882507.jpg',
              name: '北极贝'
            },
            {
              src: 'http://dpic.tiankong.com/cs/8w/QJ6312297479.jpg',
              name: '文蛤'
            },
          ]
        },
        {
          category: '肉类（冰鲜）',
          pic: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2703892528,523763249&fm=26&gp=0.jpg',
          goodsList: [
            {
              src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2351982640,3500860046&fm=26&gp=0.jpg',
              name: '鱼肉'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2703892528,523763249&fm=26&gp=0.jpg',
              name: '鱿鱼'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3392198509,3777017313&fm=26&gp=0.jpg',
              name: '金沙肉蟹'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1944077671,2996501652&fm=26&gp=0.jpg',
              name: '虾肉'
            },
            {
              src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2351982640,3500860046&fm=26&gp=0.jpg',
              name: '鱼肉'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2703892528,523763249&fm=26&gp=0.jpg',
              name: '鱿鱼'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3392198509,3777017313&fm=26&gp=0.jpg',
              name: '金沙肉蟹'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1944077671,2996501652&fm=26&gp=0.jpg',
              name: '虾肉'
            },
            {
              src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2351982640,3500860046&fm=26&gp=0.jpg',
              name: '鱼肉'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2703892528,523763249&fm=26&gp=0.jpg',
              name: '鱿鱼'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3392198509,3777017313&fm=26&gp=0.jpg',
              name: '金沙肉蟹'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1944077671,2996501652&fm=26&gp=0.jpg',
              name: '虾肉'
            },
            {
              src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2351982640,3500860046&fm=26&gp=0.jpg',
              name: '鱼肉'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2703892528,523763249&fm=26&gp=0.jpg',
              name: '鱿鱼'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3392198509,3777017313&fm=26&gp=0.jpg',
              name: '金沙肉蟹'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1944077671,2996501652&fm=26&gp=0.jpg',
              name: '虾肉'
            },
            {
              src: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2351982640,3500860046&fm=26&gp=0.jpg',
              name: '鱼肉'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2703892528,523763249&fm=26&gp=0.jpg',
              name: '鱿鱼'
            },
            {
              src: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3392198509,3777017313&fm=26&gp=0.jpg',
              name: '金沙肉蟹'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1944077671,2996501652&fm=26&gp=0.jpg',
              name: '虾肉'
            },
          ]
        },
        {
          category:'冰鲜类（水发）',
          pic: picture3,
          goodsList: [
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3047947802,3815642513&fm=26&gp=0.jpg',
              name: '水发'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1347366798,2448566733&fm=26&gp=0.jpg',
              name: '水发'
            },
            {
              src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3036876354,3565564041&fm=26&gp=0.jpg',
              name: '大闸蟹'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3047947802,3815642513&fm=26&gp=0.jpg',
              name: '水发'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1347366798,2448566733&fm=26&gp=0.jpg',
              name: '水发'
            },
            {
              src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3036876354,3565564041&fm=26&gp=0.jpg',
              name: '大闸蟹'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3047947802,3815642513&fm=26&gp=0.jpg',
              name: '水发'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1347366798,2448566733&fm=26&gp=0.jpg',
              name: '水发'
            },
            {
              src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3036876354,3565564041&fm=26&gp=0.jpg',
              name: '大闸蟹'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3047947802,3815642513&fm=26&gp=0.jpg',
              name: '水发'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1347366798,2448566733&fm=26&gp=0.jpg',
              name: '水发'
            },
            {
              src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3036876354,3565564041&fm=26&gp=0.jpg',
              name: '大闸蟹'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3047947802,3815642513&fm=26&gp=0.jpg',
              name: '水发'
            },
            {
              src: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1347366798,2448566733&fm=26&gp=0.jpg',
              name: '水发'
            },
            {
              src: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3036876354,3565564041&fm=26&gp=0.jpg',
              name: '大闸蟹'
            },
          ]
        }
      ],
      current: 0,
    }
  }
  config = {
    navigationBarTitleText: '海鲜分类'
  }
  // 选择种类
  selectCategory(e){
    console.log(123, e)
    this.setState({
      current: e
    })
  }
  render(){
    const { categoryList, current } = this.state
    return(
      <View className='category'>
        <View className='sea_category'>
          {categoryList.map((item, index) => (
            <View className='category_panel' onClick={this.selectCategory.bind(this,index)} key>
              <View className={'category_text'+(index===current?'_action':'')}><Text className='panel_text'>{item.category}</Text></View>
              <View className='category_hr'></View>
            </View>
          ))}
        </View>
        <View className='category_detail'>
            <View className='category_name'>
              <Text className='name'>{categoryList[current].category}</Text>
              <View className='all'>全部<Text className='to'>></Text></View>
            </View>
            <View className='category_picture'>
              <Image className='category_img' src={categoryList[current].pic} />
            </View>
            <View className='category_goods'>
              {categoryList[current].goodsList.map(item => (
                <View className='fishDemo' key>
                  <Image className='fish_img' src={item.src} />
                  <Text className='fish_text'>{item.name}</Text>
                </View>
              ))}
            </View>
        </View>
      </View>
    )
  }
}
