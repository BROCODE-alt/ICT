import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import State from './components/state'
import Counter from './components/Counter'
import Name from './components/name'
import Api from './components/Api'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
       <Navbar />
      <h1>CD automotives</h1>
       <Routes>
        <Route path="/log" element={<Login/>}/>
        <Route path="/sign" element={<Signup />}/>
        <Route path="/state" element={<State/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/name" element={<Name />} />
        <Route path="/api" element={<Api/>}/>
       </Routes>

    </div>
  )
}

export default App
