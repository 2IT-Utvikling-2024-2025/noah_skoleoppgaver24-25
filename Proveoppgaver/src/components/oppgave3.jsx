import { useState } from "react";
 
 
expor default function Oppgave3() {
    const [sum, setSum] = useState(0);
    const [sum2, setSum2] = useState(0);
 
    const [partall, setPartall] = useState("");
    const [partall2, setPartall2] = useState("");
 
    function generateRandomNumbers() {
        setSum(Math.floor(Math.random() * 10));
        setSum2(Math.floor(Math.random() * 10));
    }
 
    function SjekkerPartall () {
        if (sum % 2 === 0) {
            setPartall("true")
        } else {
            setPartall("false")
        }
        if (sum2 % 2 === 0) {
            setPartall2("true")
        } else {
            setPartall2("false")
        }


        
    }
 
 
 

   
 
 
    return (
        <>
            <h1>Oppgave 3</h1>
 
            <button onClick={generateRandomNumbers}>Generate Random Numbers</button>
            <p>Sum av to tall</p>
            <p>{sum}</p>
            <p>{partall}</p>
            <p>{sum2}</p>
            <p>{partall2}</p>
            <button onClick={SjekkerPartall}>Sjekk partall</button>
            <button>Summen<p>{sum+sum2}</p></button>
            
        </>
    );
}
 
 




  