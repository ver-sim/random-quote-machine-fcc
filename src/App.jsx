
import { Quote } from './Quote'
import './App.scss'
import { useState } from 'react';

const colors = [
  '#4a4e69',
  '#9a8c98',
  '#c9ada7',
  '#f2e9e4',
  '#D8DBE2',
  '#A9BCD0',
  '#58A4B0',
  '#DAA49A',
  '#897276',
  '#487281',
  '#69727C',
  '#A28B8B',
  '#DDA15E',
];

function App() {
const [color, setColor] = useState([]);
console.log(colors.length);

function randomColor() {
const randomColor = Math.floor(Math.random() * colors.length);
setColor(colors[randomColor]);
console.log(color);

}
  return (
    <div id='app' style={{background: color}}>
      <Quote bgColor={randomColor} color={color}/>
    </div>
  )
}

export default App
