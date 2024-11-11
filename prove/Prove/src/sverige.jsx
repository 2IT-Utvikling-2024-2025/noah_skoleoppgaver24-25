

import image2 from './assets/images/sverige.jpg';
import './App.css';
import Konverter from './sekconverter';
export default function Sverige() {


    return (
          
        <div className='Sverige'>
        <h1> Sverige</h1>
        <img className='SverigeFlag' src={image2} alt="Sverige" />
        <p>Temperatur: 32 Grader Celcius</p>
        <p>Været: Sol</p>
        <Konverter></Konverter>  
        </div>   
        
    )
}


  