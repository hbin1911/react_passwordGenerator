import { useState } from "react";
import "./App.css";
import usePasswordGenerator from "./hooks/passwordGenerator";
import PasswordStrengthIndicator from './components/strengthChecker';

function App() {

  const [length, setLength] = useState(4)
  const [copied, setCopied] = useState(false)
  const [checkboxData, setCheckboxData] = useState([
    {title: "Include Uppercase Letters", state:false},
    {title: "Include Lowercase Letters", state:false},
    {title: "Include Numbers", state:false},
    {title: "Include Symbols", state:false},
  ])

  const handleCheckbox = (i) => {
    const updatedcheckbox = [...checkboxData]
    updatedcheckbox[i].state = !updatedcheckbox[i].state
    setCheckboxData(updatedcheckbox)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(password)
    setCopied(true)

    setTimeout(()=>{
      setCopied(false)
    }, 1000)
  }

  const {password,error,passwordgenerator} = usePasswordGenerator()

  return (
    <div className="container">
      {password && <div className="header">
        <div className="title">{password}</div>
        <button className="copyBtn" onClick={handleCopy}>{copied?"copied!":"copy"}</button>
      </div>}
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
            <input type="checkbox" onChange={()=>handleCheckbox(i)} checked={checkbox.state}/>
            <label>{checkbox.title}</label>
          </div>
        })}
      </div>

      <PasswordStrengthIndicator password={password}/>

        {error && <div className="error">{error}</div>}

      <button className="generateBtn" onClick={()=>passwordgenerator(checkboxData, length)}>Generate Password</button>
    </div>
  );
}

export default App;
