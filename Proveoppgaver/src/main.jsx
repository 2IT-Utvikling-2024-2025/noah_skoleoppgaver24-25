import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import Oppgave3 from './components/oppgave3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Oppgave3></Oppgave3>
  </StrictMode>
)
