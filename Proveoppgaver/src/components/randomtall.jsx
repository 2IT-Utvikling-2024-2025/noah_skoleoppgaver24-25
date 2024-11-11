import React, { useState } from 'react';
 


const partallSjekker = () => {
    const [randomNumbers, setRandomNumbers] = useState([])
    const [summenNumbers, setsummenNumbers] = useState([])

    const generateRandomNumbers = () => {
            const numbers = Array.from({length: 2}, () => Math.floor(Math.random() * 10));
            setRandomNumbers(numbers);
            setsummenNumbers(filterSummenNumbers(numbers)); 
        };

        eturn(

            <div>

            <h1>Sjekker om tallet er partall</h1>
            <button onClick={(generateRandomNumbers)}>Generere random tall </button>
            <h2> Genererte Nummere </h2>
            <p>{randomNumbers.join('+')}</p>

            <h2>Sum</h2>
            <p>{summenNumbers.join('')}</p>
            
            </div>

        );


};
exort default PartallSjekker;
