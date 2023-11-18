import { useState } from "react";
import "./App.css";

function App() {

  const [length, setLength] = useState(4)
  const [checkboxData, setCheckboxData] = useState([
    {title: "Include Uppercase Letters", state:false},
    {title: "Include Lowercase Letters", state:false},
    {title: "Include Numbers", state:false},
    {title: "Include Symbols ", state:false},
  ])

  return (
    <div className="container">
      <div className="header">
        <div className="title">KhrOyZ</div>
        <button className="copyBtn" onClick={()=>{}}>copy</button>
      </div>
      <div className="charLength">
        <span>
          <label>Character Length</label>
          <label>{length}</label>
        </span>
          <input type="range" 
          min='4'
           max='20'
           value={length}
           onChange={(e)=>setLength(e.target.value)}
          />
      </div>
      <div className="checkboxes">
        {checkboxData.map((checkbox, i)=>{
          return <div key={i}>
            <input type="checkbox" checked={checkbox.state}/>
            <label>{checkbox.title}</label>
          </div>
        })}
      </div>
      <button className="generateBtn" onClick={()=>{}}>Generate Password</button>
    </div>
  );
}

export default App;
