import './App.css';
import PayerContainer from './Components/PlayerContainer/PlayerContainer'
import GetData from './Components/GetData/GetData'
import React, {useEffect, useState} from 'react'



function App() {
  const [data, setData] = useState({})
  const url = "http://52.90.82.235:8888/geotourdata/json.cfm?h=-107,37,s,en,3A771765"


  return (
    <div className="App">
      <GetData />
      <PayerContainer/> 

    </div>
  );
}

export default App;
