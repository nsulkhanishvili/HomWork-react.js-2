import Buatton from "./Button";
import { useEffect, useState } from "react";

export default function Counter({stratValue, increase}) {

  const [number, setNumber] = useState(stratValue || 0);

  const decrement =() => {
    if (number > 0) {
      setNumber(number - (increase || 5))
    } else {
      setNumber (0);
    }
  };

   useEffect (() => {
    if (stratValue) {
      setNumber(stratValue);
    } else {
      setNumber (0);
    }
   }, [stratValue]);

    return (
      <div className="Counter">
        <p>{number}</p>
        <input 
          type="number"
          min="0"
          placeholder="Type Number"
          value = {number} 
          onChange={(e) => setNumber(e.target.value)}
        />

        <Buatton  
          className="Button"
          text='მიმატება'
          onClick={() => setNumber(number + (increase || 5))}/>
        <Buatton  
          className="Button"
          text='გამოკლება'
          onClick={decrement}/>
      </div>
  );
}
