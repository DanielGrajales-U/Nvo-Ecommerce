import { useState } from 'react'
import Login from './components/Login/Login'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
      </div>
    </Router>
  )
}

export default App
