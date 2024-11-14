import React from 'react';
import './Elev.css'
function Elev({ id, navn, onChange }) {
  const [localNavn, setLocalNavn] = React.useState(navn);

  const handleNavnChange = (e) => {
    setLocalNavn(e.target.value);
    onChange(e.target.value);
  };

  return (
    <div>
      <input type="text" value={localNavn} onChange={handleNavnChange} />
    </div>
  )
}

export default Elev




