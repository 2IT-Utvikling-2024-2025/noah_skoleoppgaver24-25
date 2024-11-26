import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Students from './Students';
import Profile from './Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Students />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;