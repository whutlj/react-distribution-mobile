import React from 'react';
import ReactDOM from 'react-dom';
import '@/assets/css/base.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import router from '@/router';
import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducers from '@/reducers/routeStore';
import createSagaMiddleware from 'redux-saga';
import user from '@/saga/user';

import { createLogger } from 'redux-logger';
const loggerMiddleware = createLogger();
// const store = createStore(
//   rootReducers,
//   applyMiddleware(thunkMiddleware, loggerMiddleware)
// );
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducers,
  applyMiddleware(sagaMiddleware, loggerMiddleware)
);
sagaMiddleware.run(user);
if (process.env.PROD_TEST) {
  console.log('设置变量成功');
}
ReactDOM.render(
  <Provider store={store}>
    <Router basename={router.basename}>
      <Switch>
        {router.routes.map((route, index) => (
          <Route
            path={route.path}
            component={route.component}
            key={index}
            exact={route.exact}
          />
        ))}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
