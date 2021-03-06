import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import togglingPanelReducer from './reducers/TogglingPanelReducer';
import moviesPanelReducer from './reducers/MoviesPanelReducer';

const combinedReducer = combineReducers({togglingPanelReducer, moviesPanelReducer});
const store = createStore(combinedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));
