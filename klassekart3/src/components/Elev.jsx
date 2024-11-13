import './Elev.css'

export default function Elever (){
    return (
    <div className='bord'>
        <h1>Elev</h1>
    </div>
    
    )
}
const elever = document.querySelectorAll('.elev');

elever.forEach((elev) => {
  elev.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text', elev.textContent);
  });
});

document.addEventListener('dragover', (e) => {
  e.preventDefault();
});

document.addEventListener('drop', (e) => {
  const elevText = e.dataTransfer.getData('text');
  const container = document.querySelector('.container');
  const newElev = document.createElement('div');
  newElev.classList.add('elev');
  newElev.textContent = elevText;
  container.appendChild(newElev);
});


