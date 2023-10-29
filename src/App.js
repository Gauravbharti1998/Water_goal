
import './App.css';
import { useState } from 'react';


function App() {
  const [target, newVal] = useState(0);
  const setTarget = () => {
    const val = document.getElementById("dt").value;
    newVal(val);
  }

  const [stats, setStats] = useState(0);
  const increase = () => {
    setStats(stats + 1);
    if( stats >= target-1 ){ 
      var temp = document.getElementById("dt2").value;
      document.getElementById('congrats').style.visibility='visible';
      document.getElementById('congrats').innerHTML = 'Congratulations!! </br> You have achieved your daily water intake goal !<br/> Total water intake  ' + '</br>' + (temp * target)/1000 + ' Litres';
    }
  }
  const decrease = () => {
    if (stats > 0) {
      setStats(stats - 1)
    }
  }
 
  return (
    <div>
      <div className='heading'>
        <h1>Welcome to the DAILY WATER GOAL TRACKER</h1>
      </div>
      <h4>PLEASE NOTE: This app keeps track considering that you use same volume of bottle everytime</h4>
      <div className='body'>       
          <div className='upperbdy'>
            <div className='upperbdy1'>
              <h2>Current Daily target :- <strong>{target}</strong> Bottles</h2>
            </div>
            <div className='upperbdy2'>
              <h3>Set daily target</h3>
              <input type='number' id='dt'></input>
              <button className='set' type='button' onClick={setTarget}>SET</button>
            </div>
            <div className='vol'>
                <h3> Enter bottle volume in ml.</h3>
                <input type = 'number' id='dt2'></input><br/>
                <button className='save' type = 'button' > SAVE</button>
            </div>
            <div className='congo' id = "congrats"> </div>
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
