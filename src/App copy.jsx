import './App.css'
import Post from './components/Post'
import { useState } from 'react'
import { useEffect } from 'react';

function App() {

  // contador es la variable de estado y setContador es la función que me permite modificar ese estado
  const [contador, setContador] = useState(0);

  // Modificador de un texto
  const [texto, setTexto] = useState('');
  const [saludo, setSaludo] = useState('');

  const [tiempo, setTiempo] = useState(0);
  // Declaración del hook del useEffect
  useEffect(() => {
    const saludar = setSaludo('Bienvenido');
    return () => clearInterval(saludar);
  }, []);
  // Si pongo el array final vacío esto hará que UE se ejecute solo cuando cargo la página por primera vez

  useEffect(() => {
    const intervalo = setInterval(() => {
      setTiempo(tiempo + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempo]);
  // Para este contexto, UE se ejecuta solo cuando se altera el estado de la variable tiempo.

  return (
    <>
    <h1>{ saludo }</h1>
      <h1>Tiempo transcurrido { tiempo } segundos</h1>
      <hr />
      <h2>Valor del contador: { contador }</h2>
      <button onClick={ () => setContador(contador - 1) } >Disminuir</button>
      <button onClick={ () => setContador(contador + 1) } >Aumentar</button>
      <hr />
      <h3>{ texto }</h3>
      <input type="text" onInput={ (event) => setTexto(event.target.value) }/>
      <hr />

      <Post username={'Eloisse'} texto={'Hola, soy Elo'} />
      <Post username={'Hans'} texto={'Hola, soy Hans'} />
    </>
  )
}

export default App
