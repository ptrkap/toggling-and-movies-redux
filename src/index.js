import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import togglingPanelReducer from './reducers/TogglingPanelReducer'

const combinedReducer = combineReducers({togglingPanelReducer});
const store = createStore(combinedReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
