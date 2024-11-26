import { Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Elev from './klasseliste'
import Profil from './profil';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Elev />} />
        <Route path="/profil/:id" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App
