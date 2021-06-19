import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// import todoReducer from './components/useReducer/Reducer'



// const initialState = [
//   {id:1, task : 'Aprender React Hooks', state:false},
//   {id:2, task : 'Aprender Vuex', state:false}
// ]

// const addTodoAction = {
//   type: 'add',
//   payload: {id:3, task : 'Aprender Java', state:false}
// }

// const state = todoReducer(initialState, addTodoAction)

// console.log(state)