
import image1 from './assets/images/england.png';
import './App.css';
import Konverter from './euroconverter';
export default function England() {



    return (
        
        <div className='England'>
         <h1> England </h1>
            <img className='EnglandFlag' src={image1} alt="England" />
            <p>Temperatur: 18 Grader Celcius</p>
            <p>Været: Overskyet</p>
            <Konverter></Konverter>
         </div>
        
    )
}