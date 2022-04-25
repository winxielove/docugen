import { useState } from 'react'
import "./index.css"

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      <h1 className='app-title'>Welcome to Winxie's Docugen!</h1>
      <div className='app-openers'>
        <button>Open Existing Project</button>
        <button>Create New Project</button>
      </div>
    </div>
  )
}

export default App
