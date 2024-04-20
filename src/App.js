const msgs = [
  "Atomic habits",
  "You won't always feel the vibe",
  "Consistency"
]

export default function App() {
  return <div className="steps">
    <div className="numbers">
      <div className="active"> 1 </div>
      <div> 2 </div>
      <div> 3 </div>
    </div>

    <p className="msg"> {msgs[0]} </p>

    <div className="btns">
      <button style={{color: "#fff", backgroundColor: "#7950f2"}}> Previous </button>
      <button style={{color: "#fff", backgroundColor: "#7950f2"}}> Next </button>
    </div>
  </div>
}