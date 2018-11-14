import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import { Home, About, Nav, Posts } from './pages';

const Root = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        {/* exact :
          - 정확히 해당 Path와 일치할때 보여줌
          - 제거 시에는 / 경로의 내부이기 때문에 다 보여줌
        */}

        <Route exact path="/" component={Home} />

        {/* /about, /about/somebody */}
        {/* <Route exact path="/about" component={About} /> */}
        {/* <Route path="/about/:name" component={About} /> */}

        {/* /about?key=value */}
        <Route path="/about/:name?" component={About} />
        <Route path="/posts" component={Posts} />
        <Nav />
        <App />
      </React.Fragment>
    </BrowserRouter>
  )
};

export default Root;
