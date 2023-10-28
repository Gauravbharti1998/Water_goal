
import './App.css';
import { useState } from 'react';

function App() {
  const [prev, newVal] = useState(0);
  const setTarget = () => {
    const val = document.getElementById("dt").value;
    newVal(val);
  }

  const [stats, setStats] = useState(0);
  const increase = () => {
    setStats(stats + 1);
  }
  const decrease = () => {
    if (stats > 0) {
      setStats(stats - 1)
    }
  }
  return (
    <div>
      <div className='heading'>
        <h1>DAILY WATER GOAL TRACKER</h1>
      </div>
      <div className='body'>
        <div>
          <h2>Current Daily target :- {prev} bottles</h2>
          <h3>Set daily target</h3>
          <input type='number' id='dt'></input>
          <button type='button' onClick={setTarget}>SET</button>
        </div>
        <div className='countr'>
          <h2>Increase or Decrease the count of bottles you have consumed.</h2>
          <button onClick={increase}> + </button>
          <h2>{stats} bottles</h2>
          <button onClick={decrease}> - </button>
        </div>
      </div>
             </div>
      )
}

      export default App;
