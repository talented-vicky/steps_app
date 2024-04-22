import { useState } from "react";

const msgs = [
  "Atomic habits",
  "You won't always feel the vibe",
  "Consistency"
]

export default function App() {
  const [steps, setSteps] = useState(1);
  // because useState() returns an array

  function decSteps() {
    if(steps === 1){
      return alert('No previous');
    }
    setSteps(steps - 1 )
  }
  
  function incSteps() {
    if(steps === msgs.length){
      return alert('End of steps');
    }
    setSteps(steps + 1)
  }

  return <div className="steps">
    <div className="numbers">
      <div className={steps === 1 ? 'active' : ''}> 1 </div>
      <div className={steps === 2 ? 'active' : ''}> 2 </div>
      <div className={steps === 3 ? 'active' : ''}> 3 </div>
    </div>

    <p className="msg"> {msgs[steps - 1]} </p>

    <div className="btns">
      <button
        style={{color: "#fff", backgroundColor: "#7950f2"}}
        onClick={ decSteps }
      > 
        Previous 
      </button>

      <button 
        style={{color: "#fff", backgroundColor: "#7950f2"}}
        onClick={ incSteps }
      > 
        Next 
      </button>
    </div>
  </div>
}