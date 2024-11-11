

import image3 from './assets/images/norge.jpg';
import './App.css';
export default function Norge() {


    return (
         
        <div className='Norge'> 
        <h1> Norge</h1>
        <img className='NorgeFlag' src={image3} alt="Norge" />
        <p>Temperatur: 12 Grader Celcius</p>
        <p>Været: Overskyet</p>
        </div>
        
    )
}