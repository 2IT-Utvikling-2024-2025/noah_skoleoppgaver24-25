import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Cases from './components/cases'
import Login from './components/Login'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Cases />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
