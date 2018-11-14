import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Post } from './';

export default class posts extends Component {
  constructor(props) {
    console.log('props', props);
    super(props);
  }

  componentDidUpdate(prevProps) {
    // 변경 링크 확인 가능 (props = router 정보)
    console.log('prevProps', prevProps.location, this.props.location);
  }

  render() {
    const { match } = this.props;
    return (
      <div>
        <h6>List of Posts</h6>
        <ul style={{border: '1px solid #000'}}>
          <li><Link to={`${match.url}/1`}>Post #1</Link></li>
          <li><Link to={`${match.url}/2`}>Post #2</Link></li>
          <li><Link to={`${match.url}/3`}>Post #3</Link></li>
        </ul>
        <Route path={`${match.url}/:id`} component={Post}></Route>
      </div>
    );
  }
}

