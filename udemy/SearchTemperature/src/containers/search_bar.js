import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    // bind
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(evt) {
    // console.log('evt.target.value', evt.target.value);
    this.setState({term: evt.target.value});
  }

  render() {
    return (
      <form className="input-group">
        <input
          placeholder="forecast in your cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    );
  }
}
