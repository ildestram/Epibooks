import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import commentsFromBookReducer from './states/commentsState'
import booksReducer from './states/booksState'

const reducer = combineReducers({
  commentsSlice: commentsFromBookReducer, 
  bookSlice: booksReducer
}) /* oggetto che conterrà tutti i reducers, cioè gli stati */
const store = configureStore({
  reducer
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}> {/* tutto quello qui dentro ha accesso a store (insieme dei reducer) */}
      <App />
    </Provider>
  </React.StrictMode>
);


/* 
- togliere fetch e implementare redux 
- non passare come props ma importare stato come altro componente
*/

