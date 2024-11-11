import { useState } from "react";

export default function Konverter() {




    const [krone, setKrone] = useState('');
    const [euro, setEuro] = useState('');
    
  
    function kroneToEuro() {
  
      setEuro(krone/11)
  
    }
  
    return (
      <div>
        <h2>Krone to Euro Konverterer</h2>
        <input
          type="text"
          value={krone}
          onChange={(e) => setKrone(e.target.value)} 
          placeholder="Enter Krone"
        />
          <button onClick={kroneToEuro}>Konverter</button>
          <h2>Euro:{euro}</h2>
        <h2>Krone:{krone}</h2>
      </div>
      
    );

}