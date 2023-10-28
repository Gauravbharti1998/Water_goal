
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
        
          <div className='upperbdy'>
            <div className='upperbdy1'>
              <h2>Current Daily target :- <strong>{prev}</strong> Bottles</h2>
            </div>
            <div className='upperbdy2'>
              <h3>Set daily target</h3>
              <input type='number' id='dt'></input>
              <button className='set' type='button' onClick={setTarget}>SET</button>
            </div>
          </div>
          <div className='countr'>
            <h2>Increase or Decrease the count of bottles consumed.</h2>
            <button className='addbtn' onClick={increase}> + </button>
            <div>
              <h2>{stats} bottles</h2>
            </div>
            <button className='sbbtn' onClick={decrease}> - </button>
          </div>
      </div>
    </div>
  )
}

export default App;
