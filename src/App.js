import { useState } from "react";

const msgs = [
  "Atomic habits",
  "You won't always feel the vibe",
  "Consistency"
]

export default function App() {
  const [steps, setSteps] = useState(1);
  const [isVisible, setIsVisible] = useState(true)
  // because useState() returns an array

  function decSteps() {
    if(steps === 1){
      return alert('No previous');
    }
    setSteps((s) => s-1)
    // this takes the current value of state
  }
  
  function incSteps() {
    if(steps === msgs.length){
      return alert('End of steps');
    }
    setSteps(steps + 1)
    // a poor way of updating state
  }

  return <>
    <button
      className="btn-new"
      onClick={ () => setIsVisible(!isVisible) }
    >
    &times;
    </button>

    {isVisible && <div className="steps">
      <div className="numbers">
        <div className={steps === 1 ? 'active' : ''}> 1 </div>
        <div className={steps === 2 ? 'active' : ''}> 2 </div>
        <div className={steps === 3 ? 'active' : ''}> 3 </div>
      </div>

      <p className="msg"> {msgs[steps - 1]} </p>

      <div className="btns">
        <Button color="#fff" bkColor="#7950f2" func={decSteps}> ◀ Prev</Button>
        <Button color="#fff" bkColor="#7950f2" func={incSteps}> Next ▶</Button>
      </div>

    </div>}

    <Cloak></Cloak>
  </>
}

function Button({color, bkColor, func, children}) {
  // the "children" props lets me pass whatever I want, hence making the
  // button truly truly reusable
  return (
    <button 
      style={{color: color, backgroundColor: bkColor}}
      onClick={ func }
    > 
    {children}
    </button>
  )

}

function Cloak() {
  const [bill, setBill] = useState(0);
  const [tip, setTip] = useState(10);
  const [addTip, setAddTip] = useState(5);

  function handleReset() {
    setBill(0); setTip(10); setAddTip(5)
  }

  return (
    <div className="cloak">
      <BillPrice bill={bill} setBill={setBill}></BillPrice>
      <Tip tip={tip} setTip={setTip}> How did you like the service?</Tip>
      <Tip tip={addTip} setTip={setAddTip}> How did your friend like the service?</Tip>
      <OutputButton bill={bill} tip={tip} addTip={addTip} onReset={handleReset}></OutputButton>
    </div>
  )
}

function BillPrice({bill, setBill}) {
  return <div>
    <label> How much was the bill? </label>
    <input
      type="number"
      value={bill}
      onChange={e => setBill(Number(e.target.value))} 
    >
    </input>
  </div>
}

function Tip({tip, setTip, children}) {
  return <div>
    <label>{children}</label>
    <select
      value={tip}
      onChange={e => setTip(Number(e.target.value))}
    >
      <option value={0}>Dissatisfied (0%)</option>
      <option value={5}>It was okay (5%)</option>
      <option value={10}>It was good actually 😋 (10%)</option>
      <option value={20}>Absolutely amazing 🤗 (20%)</option>
    </select>
  </div>
}

function OutputButton({bill, tip, addTip, onReset}) {
  const totalTip = bill * [(tip + addTip) / 2] *.01;
  const totalBill = bill + totalTip; 
  
  return <>
    {
      bill !== 0 &&
      <div>
        <p> <b>You pay ${totalBill} (${bill} + ${totalTip} tip)</b> </p>
        <button onClick={onReset}>Reset</button>
      </div>
    }
  </>
}

// react basically reacts to changes in state by
// re-rendering the UI

// nwa baby (remix) || ada ada || ololufe || diana || duro || pana || wash

// MS SQL server