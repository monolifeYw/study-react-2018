import React from 'react';
import { Route } from 'react-router-dom';

import App from './App';
import { Home, About, Nav, Posts } from './pages';

import { Switch } from 'react-router-dom';

const Root = () => {
  return (
      <React.Fragment>
        {/* exact :
          - 정확히 해당 Path와 일치할때 보여줌
          - 제거 시에는 / 경로의 내부이기 때문에 다 보여줌
        */}
        <Switch>
          <Route exact path="/" component={Home} />


          {/* /about, /about/somebody */}
          {/* <Route exact path="/about" component={About} /> */}
          {/* <Route path="/about/:name" component={About} /> */}

          {/* /about?key=value */}
          <Route path="/about/:name?" component={About} />
          <Route path="/posts" component={Posts} />
          <Route
            path="/abc"
            component={props => {
              console.log('[props]', props);
              return (
                <Posts
                  {...props}
                  extra="specPosts"
                />
              );
            }}
          />
          <Route component={Home} />
        </Switch>
        <Nav />
        <App />
      </React.Fragment>
  )
};

export default Root;
