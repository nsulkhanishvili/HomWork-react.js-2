import Buatton from "./Button";
import { useState } from "react";

export default function Counter({stratValue, increase}) {

  const [number, setNumber] = useState(stratValue || 0);

    return (
      <div className="Counter">
        <p>{number}</p>
        <input 
          type="number"
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
          onClick={() => setNumber(number - (increase || 5))}/>
      </div>
  );
}
