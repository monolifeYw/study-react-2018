import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const activeStyle = {
  color: 'skyblue',
  font: '2rem'
}

export default function Nav() {
  return (
    <React.Fragment>
      <ul>
        <li><Link to="/">HoMe</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/about/react-proto">About name</Link></li>
        <li><Link to="/posts">Posts</Link></li>
      </ul>

      <ul>
        <li><NavLink exact to="/" activeStyle={activeStyle}>HoMe</NavLink></li>
        <li><NavLink exact to="/about" activeStyle={activeStyle}>About</NavLink></li>
        <li><NavLink exact to="/about/react-proto" activeStyle={activeStyle}>About name</NavLink></li>
        <li><NavLink exact to="/posts" activeStyle={activeStyle}>Posts</NavLink></li>
      </ul>
    </React.Fragment>
  );
};
