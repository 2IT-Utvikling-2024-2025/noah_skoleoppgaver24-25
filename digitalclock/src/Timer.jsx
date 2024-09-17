import { useState, useEffect } from 'react'
import './App.css'
import Explosion from './explosion';

export default function Timer() {
    const [time, setTime] = useState(10);

  


    useEffect(() => {
  
      const myinterval = setInterval(() => {
  
        if (time == 0) {
          setTimeout(() => {
            setTime(10)
          }, 600)
        } else {
        setTime(time - 1);
      }
     
    
    }, 1000);
  
      return () => clearInterval(myinterval);
    }, [time]);

    return (
        <>
            <div className='header'>
            </div>
            <div className='middle'>
                {time == 0 ? <Explosion /> : <p>{time}</p>}
            </div>

            <div className='footer'>
            </div>
        </>
    )





}