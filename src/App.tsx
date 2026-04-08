import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(pr => pr+1)}>
                +1
            </button>
        </div>
  )
}

export default App
