import React from 'react';

function App(props) {
  let counter = 0;
  function countUp(){
    return (
      counter = counter + 1
      );
  }
  return (
    <div>
      <h3>Total clicks: {counter}</h3>
      <button onClick={countUp}>Click me</button>
    </div>
  );
}

export default App;