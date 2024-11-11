export default function App() {
    const [centimeter, setCentimeter] = useState('');
    const [tommer, setTommer] = useState('');
    
  
    function cmToTommer() {
  
      setTommer(centimeter/2.54)
  
    }
  
    return (
      <div>
        <h2>Centimeter to Tommer Converter</h2>
        <input
          type="text"
          value={centimeter}
          onChange={(e) => setCentimeter(e.target.value)} // Update input state
          placeholder="Enter Centimeter"
        />¨
          <button onClick={cmToTommer}>Konverter</button>
          <h1>{tommer}</h1>
        <h1>{centimeter}</h1>
      </div>
      
    );
  }