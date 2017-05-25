import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider}  from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {applyMiddleware, createStore}  from 'redux';
import {promiseMiddleware}  from './middleware';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

const defaultState = {
    appName:'concon',
    articles:null
};

const reducer = (state = defaultState, action)=>{
    switch(action.type){
        case 'HOME_PAGE_LOADED':
            return {appName:state.appName, articles:action.payload.articles};
        default:
            return state;
    }
}

const store = createStore(reducer, composeWithDevTools(applyMiddleware(promiseMiddleware)));

ReactDOM.render((
        <Provider store = {store}>
            <App appName={defaultState.appName}/>
        </Provider>
    )
    , document.getElementById('root'));
registerServiceWorker();
