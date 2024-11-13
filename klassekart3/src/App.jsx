import './App.css'
import Elever from './components/Elev.jsx'

function App() {

  return (
    <div className='App'>
      <div className="header">
      <h1>Klassekart</h1>
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
