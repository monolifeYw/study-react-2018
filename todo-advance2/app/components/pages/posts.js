import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Post } from './'
import CustomBtn, { CustomBtnType } from '../style/CustomBtn'
import CustomBtn2, { CustomBtnType2 } from '../style/CustomBtnType2'
export default class posts extends Component {
  constructor(props) {
    console.log('props', props)
    super(props)
  }

  componentDidUpdate(prevProps) {
    // 변경 링크 확인 가능 (props = router 정보)
    console.log('prevProps', prevProps.location, this.props.location)
  }

  testAction(t) {
    console.log('testAction Btn', t)
  }

  render() {
    const { match } = this.props
    const PostsTmpl = (
      <div>
        <h6>List of Posts</h6>
        <ul style={{border: '1px solid #000'}}>
          <li><Link to={`${match.url}/1`}>Post #1</Link></li>
          <li><Link to={`${match.url}/2`}>Post #2</Link></li>
          <li><Link to={`${match.url}/3`}>Post #3</Link></li>
        </ul>

        <CustomBtn className="on" btnType={CustomBtnType.TYPE1} onClick={() => this.testAction('CustomBtn')}>구독중</CustomBtn>

        <CustomBtn btnType={CustomBtnType.TYPE2}>구독하기</CustomBtn>

        <CustomBtn2 className="on" btnType={CustomBtnType2.TYPE1} onClick={() => this.testAction('CustomBtn Type2')}>구독중</CustomBtn2>

        <CustomBtn2 className="on" btnType={CustomBtnType2.TYPE2} onClick={() => this.testAction('CustomBtn Type2-todo')}>구독하기</CustomBtn2>

        <Route path={`${match.url}/:id`} component={Post}></Route>
      </div>
    )

    return PostsTmpl
  }
}

