import { useState } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css'
import Elever from './components/Elev.jsx'

function App() {
  const [elevNavn, setElevNavn] = useState({
    1: 'John',
    2: 'Jane',
    3: 'Bob',
    4: 'Alice',
    5: 'Mike',
    6: 'Emma',
    7: 'Tom',
    8: 'Lily',
    9: 'David',
    10: 'Sophia',
    11: 'Oliver',
    12: 'Isabella',
    13: 'David Leo',
    14: 'David',
    15: 'Birk',
  });

  const handleNavnChange = (id, navn) => {
    setElevNavn((prevNavn) => ({ ...prevNavn, [id]: navn }));
  };

  return (
    <div className='App'>
      <div className="header">
        <h1>2ITA</h1>
      </div>
      <div className="container">
  <div className="left-side">
    <Elever id={1} navn={elevNavn[1]} onChange={(navn) => handleNavnChange(1, navn)} />
    <Elever id={2} navn={elevNavn[2]} onChange={(navn) => handleNavnChange(2, navn)} />
    <Elever id={3} navn={elevNavn[3]} onChange={(navn) => handleNavnChange(3, navn)} />
    <Elever id={4} navn={elevNavn[4]} onChange={(navn) => handleNavnChange(4, navn)} />
    <Elever id={5} navn={elevNavn[5]} onChange={(navn) => handleNavnChange(5, navn)} />
    <Elever id={6} navn={elevNavn[6]} onChange={(navn) => handleNavnChange(6, navn)} />
  </div>
  <div className="right-side">
    <Elever id={7} navn={elevNavn[7]} onChange={(navn) => handleNavnChange(7, navn)} />
    <Elever id={8} navn={elevNavn[8]} onChange={(navn) => handleNavnChange(8, navn)} />
    <Elever id={9} navn={elevNavn[9]} onChange={(navn) => handleNavnChange(9, navn)} />
    <Elever id={10} navn={elevNavn[10]} onChange={(navn) => handleNavnChange(10, navn)} />
    <Elever id={11} navn={elevNavn[11]} onChange={(navn) => handleNavnChange(11, navn)} />
    <Elever id={12} navn={elevNavn[12]} onChange={(navn) => handleNavnChange(12, navn)} />
    <Elever id={13} navn={elevNavn[13]} onChange={(navn) => handleNavnChange(13, navn)} />
    <Elever id={14} navn={elevNavn[14]} onChange={(navn) => handleNavnChange(14, navn)} />
    <Elever id={15} navn={elevNavn[14]} onChange={(navn) => handleNavnChange(15, navn)} />
        </div>
      </div>
    </div>
  )
}

export default App