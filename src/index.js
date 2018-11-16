import React from 'react';
import ReactDOM from 'react-dom';
import '@/assets/css/base.css';
// 批量引入svg
import './icons/index';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import router from '@/router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import { Provider } from 'react-redux';
import * as reducers from '@/reducers';
import createSagaMiddleware from 'redux-saga';
import user from '@/saga/user';
import { createLogger } from 'redux-logger';
// 引入mock
import './mock';
const loggerMiddleware = createLogger();
// const store = createStore(
//   rootReducers,
//   applyMiddleware(thunkMiddleware, loggerMiddleware)
// );
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  combineReducers({ ...reducers }),
  applyMiddleware(sagaMiddleware, loggerMiddleware)
);
sagaMiddleware.run(user);
console.log('index页面--------------');
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
