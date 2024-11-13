import './App.css'
import Elever from './components/Elev.jsx'


const elever = document.querySelectorAll('.elever');

elever.forEach((elev) => {
  elev.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', elev.id);
  });
});

document.addEventListener('dragover', (e) => {
  e.preventDefault();
});

document.addEventListener('drop', (e) => {
  const elevId = e.dataTransfer.getData('text');
  const elev = document.getElementById(elevId);
  const container = document.querySelector('.container');
  container.appendChild(elev);
});

function App() {

  return (
    <div className='App'>
      <div className="header">
      <h1>2ITA</h1>
      </div>
      <div className="container">
  <div className="left-side">
    <Elever />
    <Elever />
    <Elever />
    <Elever />
    <Elever />
    <Elever />
  </div>
  <div className="right-side">
    <Elever />
    <Elever />
    <Elever />
    <Elever />
    <Elever />
    <Elever />
    <Elever />
    <Elever />
    <Elever />
    </div>
  </div>
</div>
  )
}

export default App
