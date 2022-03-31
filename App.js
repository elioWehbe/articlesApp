import React from 'react';
import {
  StyleSheet,
  Text
} from 'react-native';
import Navigator from './navigation/Navigator';
import { createStore, applyMiddleware,combineReducers } from 'redux';
import login from './store/reducers/login';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import articles from './store/reducers/articles';
const rootReducer = combineReducers({
  login:login,
   articles:articles
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
const App=()=>{
  return ( <Provider store={store}>
<Navigator/>
</Provider>);
};



export default App;
