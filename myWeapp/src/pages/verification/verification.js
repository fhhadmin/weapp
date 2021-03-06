import Taro, { Component } from '@tarojs/taro'
import { View, Form, Input, Button } from '@tarojs/components'
import { AtMessage } from 'taro-ui'
import WxValidate from '../../utils/WxValidate.js'
import './verification.less'
import { url } from 'inspector';

export default class Verification extends Component {
  constructor(){
    super()
    this.state = {

    }
  }
  config = {
    navigationBarTitleText: '登录授权'
  }
  componentWillMount () {
    this.initValidate()
  }
  componentDidMount () {

  }
  componentWillUpdate(){

  }
  initValidate(){
    // 验证字段的规则
    const rules = {
      email: {
        required: true,
        email: true
      },
      tel: {
        required: true,
        tel: true
      },
      idcard: {
        required: true,
        idcard: true
      }
    }
    // 验证字段的提示信息，若不传，则调用默认的信息
    const messages = {
      email: {
        required: '请输入邮箱',
        email: '请输入正确的邮箱'
      },
      tel: {
        required: '请输入手机号',
        tel: '请输入正确的手机号'
      },
      idcard: {
        required: '请输入身份证号',
        idcard: '请输入正确的身份证号'
      }
    }
    // 创建实例对象.
    this.WxValidate = new WxValidate(rules, messages)
  }
  onSubmit(e){
    const params = e.detail.value
    if(!this.WxValidate.checkForm(params)){
      const error = this.WxValidate.errorList[0]
      Taro.atMessage({
        message: error.msg
      })
      return false
    }
    // 验证成功后
    this.submitInfo(params)

  }
  // 表单提交
  submitInfo(params){
    let form = params
    console.log('将要提交的表单信息', form)
    Taro.atMessage({
      message: '授权成功！'
    })
    Taro.switchTab({
      url: '/pages/index/index'
    })

  }
  render(){
    return(
      <View className='validPage'>
        <AtMessage className='msgInfo' />
        <Form onSubmit={this.onSubmit.bind(this)}>
          <View className='container'>
            <View className='container-info'>
              <View className='man-form-info'>
                <View className='email'>邮箱
                  <Input placeholder='请输入邮箱' name='email'></Input>
                </View>
                <View className='phone'>
                  手机号码
                  <Input maxlength='11' placeholder='请输入手机号码' type='number' name='tel'></Input>
                </View>
                <View className='idcard'>
                  身份证号
                  <Input maxlength='18' placeholder='请输入身份证号码' type='idcard' name='idcard'></Input>
                </View>
              </View>
            </View>
            <View className='submit-form-info'>
              <Button form-type='submit'>提交</Button>
            </View>
          </View>
        </Form>
      </View>
    )
  }
}
