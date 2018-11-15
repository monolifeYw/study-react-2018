import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

// react-router
import { Switch } from 'react-router';

// redux
import { Provider } from 'react-redux';

import { Route } from 'react-router-dom';

// react-router-redux
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

// store
import initStore from './middleware';

// containers
import App from './containers/App';

// components
import { Home, About, Nav, Posts } from './components/pages';
import TodoContainer from './containers/todo';

const history = createBrowserHistory();
const addMiddleware = routerMiddleware(history);
const store = initStore([addMiddleware]);

/* const Connected = connect(state => {
  return state;
})(Switch); */

const Contents = () => {
  return (
    <App>
      <Nav />
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
          <Route path="/todo" component={TodoContainer} />
          <Route component={Home} />
      </Switch>
    </App>
  );
};


ReactDOM.render(
  // (<Provider store={createStoreWithMiddleware(reducer)}>
  (<Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        {/* <Root /> */}
        <Route component={Contents} />
      </Switch>
    </ConnectedRouter>
  </Provider>),
  document.getElementById('root')
);
registerServiceWorker();
