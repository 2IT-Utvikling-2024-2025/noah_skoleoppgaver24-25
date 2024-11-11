import { useState } from "react";

export default function Konverter() {




    const [krone, setKrone] = useState('');
    const [dkk, setDkk] = useState('');
    
  
    function kroneToDkk() {
  
      setDkk(krone/1.58)
  
    }
  
    return (
      <div>
        <h2>Krone to Dkk Konverterer</h2>
        <input
          type="text"
          value={krone}
          onChange={(e) => setKrone(e.target.value)} 
          placeholder="Enter Krone"
        />
          <button onClick={kroneToDkk}>Konverter</button>
          <h2>Dkk:{dkk}</h2>
        <h2>Krone:{krone}</h2>
      </div>
      
    );

}