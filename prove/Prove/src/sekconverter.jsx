import { useState } from "react";

export default function Konverter() {




    const [krone, setKrone] = useState('');
    const [sek, setSek] = useState('');
    
  
    function kroneToSek() {
  
      setSek(krone/1.04)
  
    }
  
    return (
      <div>
        <h2>Krone to Sek Konverterer</h2>
        <input
          type="text"
          value={krone}
          onChange={(e) => setKrone(e.target.value)} 
          placeholder="Enter Krone"
        />
          <button onClick={kroneToSek}>Konverter</button>
          <h2>Sek:{sek}</h2>
        <h2>Krone:{krone}</h2>
      </div>
      
    );

}