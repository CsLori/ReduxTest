import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';

function App() {
  const counter = useSelector(state => state.counterReducer);
  const isLoggedin = useSelector(state => state.isLoggedinReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Count: {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>Increase</button>
      <button onClick={() => dispatch(decrement(3))}>Decrease</button>

      {isLoggedin && (
        <h3>This very secret information only shows if you are logged in!</h3>
      )}
    </div>
  );
}

export default App;
