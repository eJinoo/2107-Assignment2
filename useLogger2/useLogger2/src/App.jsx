import { useState } from 'react'
import './App.css'
import LoggerComponent from './components/loggerComponent'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Logger</h1>
      <LoggerComponent />  {/* Render the LoggerComponent */}
    </div>
  )
}

export default App
