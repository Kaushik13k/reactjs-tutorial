import { useState, useCallback } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [isNumber, setIsNumber] = useState(false)
  const [isChar, setIsChar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (isNumber) str += "0123456789"
    if (isChar) str += "!@#[]{}()$%^&*+_~"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, isNumber, isChar])

  return (
    <>
      <div className="text-4xl text-center">
        <h1>Password Generator</h1>
        <div>
          <input className="border border-black m-2" type="text" value={password} readOnly placeholder="Password"/>
          <button className="bg-black text-white m-2" onClick={passwordGenerator}>Generate</button>
          <button className="bg-black text-white" onClick={() => navigator.clipboard.writeText(password)}>Copy</button>
        </div>
        <div className="m-2">
          <label>Length: {length}</label>
          <input
            type="range"
            min={8}
            max={100}
            value={length}
            className="cursor-pointer m-2"
            onChange={(e) => setLength(parseInt(e.target.value))}
          />
        </div>
        <div className="m-2">
          <label>
            <input
              type="checkbox"
              checked={isNumber}
              onChange={() => setIsNumber(!isNumber)}
            />
            Include Numbers
          </label>
        </div>
        <div className="m-2">
          <label>
            <input
              type="checkbox"
              checked={isChar}
              onChange={() => setIsChar(!isChar)}
            />
            Include Special Characters
          </label>
        </div>
      </div>
    </>
  )
}

export default App
