// { Component } : react 라이브러리를 불러와 Component 라 불리는 변수를 프로퍼티 형태로 가져온다.
import React, { Component } from 'react';

/*
- 함수형 컴포넌트
const SearchBar = () => {
  return <input />; // React.createElement
};
*/


/*
- 클래스 컴포넌트 
- 내부적인 정보를 저장하려 할때 생성
*/
// class SearchBar extends React.Component
class SearchBar extends Component {

  // 변수나 상태값 초기화
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  render() {
    // return <input onChange={this.onInputChange} />
    // return <input onChange={evt => console.log(evt.target.value)} />
    return (
      <div className="search-bar">
        <input 
          value={this.state.term}
          // onChange={evt => this.setState({ term: evt.target.value })} 
          onChange={evt => this.onInputChange(evt.target.value)} 
        />
        <br />
        value of input: {this.state.term}
      </div>
    );
  }

  // naming : on/handle + 요소(element) + Event name
  onInputChange(term) {

    this.setState({ term });
    this.props.onSearchTermChange(term);

    // console.log(evt);
    // console.log(evt.target.value);
  }
}


export default SearchBar;