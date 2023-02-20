import './App.css';
import Comida from './componentes/Comida';
import {useState} from "react"

function App() {

  const cenas=[{
    nombre: "Sebas",
    precio: 100
  },{
    nombre: "Si",
    precio: 90
  },{
    nombre: "No",
    precio: 80
  },{
    nombre: "Tal",
    precio: 70
  },{
    nombre: "vez",
    precio: 60
  },{
    nombre: "Jiji",
    precio: 50
  }

]

  const [total, setTotal] = useState(0)

  return(
  <>
    <h1>Total a pagar : {total}</h1>
    <div className='box'>
    <Comida nombre={cenas[0].nombre} precio={cenas[0].precio} setTotal={setTotal}/>
    <Comida nombre={cenas[1].nombre} precio={cenas[1].precio} setTotal={setTotal}/>
    <Comida nombre={cenas[2].nombre} precio={cenas[2].precio} setTotal={setTotal}/>
    <Comida nombre={cenas[3].nombre} precio={cenas[3].precio} setTotal={setTotal}/>
    <Comida nombre={cenas[4].nombre} precio={cenas[4].precio} setTotal={setTotal}/>
    <Comida nombre={cenas[5].nombre} precio={cenas[5].precio} setTotal={setTotal}/>
    </div>
  </>
  )
}

export default App;
