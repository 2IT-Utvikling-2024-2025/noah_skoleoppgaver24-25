
import image4 from './assets/images/danmark.jpg'
import './App.css';
import Konverter from './dkkconverter';
export default function Danmark() {


    return (
        
        <div className='Danmark'>
            <h1>Danmark</h1>
            <img className='DanmarkFlag' src={image4} alt="Danmark" />
            <p>Temperatur: 24 Grader Celcius</p>
            <p>Været: Sol</p>
             <Konverter></Konverter>
        </div>


             
    )
}