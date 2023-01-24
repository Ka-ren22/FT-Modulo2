import React, {useState,useEffect, useRef} from 'react';
import  './Timer.css';

const Timer = () => {
  const [segundos, setSegundos] = React.useState(0); //Agregar 'React' antes de useState para evitar problemas de testing
  const [activo, setActivo] = React.useState(false);
  const [tipo, setTipo] = React.useState('Contador');

  const myRef = React.useRef(null); //Esta referencia mira al input de 'Ingresar segundos'
  //Uso este hook para que este atento a los posibles cambios del input (en analogia a e.target.value)

  //useEffect(() => {}); --> Se ejecuta siempre
  //useEffect(() => {}, []); --> Se ejecuta una unica vez y solo al inicio
  //useEffect(() => {}. [segundos]); --> Se ejecuta cuando segundos sea modificado
  //useEffect(() => {return}) --> se desmonta el componente

  useEffect(() => {
    let intervalo = null;
    if (activo && tipo === 'Contador') {
      intervalo = setInterval(() => {
        setSegundos(segundos => segundos + 1);   //setInterval(()=>{setSegundos(prevState => prevState + 1);},1000)
      }, 1000);
    }
    if(activo && tipo ==='Cuenta Regresiva') { 
      intervalo = setInterval(()=>{
        setSegundos(segundos => segundos - 1)
      }, 1000);
    }
    if (!activo && segundos !== 0 && tipo === 'Contador') {
      clearInterval(intervalo);
    }
    if(segundos === 0 && tipo === 'Cuenta Regresiva'){
      reset();
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);  //No se ejecuta hasta que el componente no se desmonte
  }, [activo, segundos, tipo]);  //dependencias

  //Funciones que uso para renderizar

  function toggle() {
    setActivo(!activo);
  }

  function reset() {
    setSegundos(0);
    setActivo(false);
  }

  function cambioTipo() {
    if(tipo === 'Contador') setTipo('Cuenta Regresiva')
    if(tipo === 'Cuenta Regresiva') setTipo('Contador')
}

function agregaSegundos() {
  // `current` apunta al elemento de entrada de texto montado
  let ref = myRef.current.value
  setSegundos(ref);
}


  return (
    <div className="app">
      <div className="time">
        {segundos}s
      </div>
      <div className="row">
        <button className={`button button-primary  button-primary-${activo ? 'active' : 'inactive'}`}  onClick={toggle}>
             { activo ? 'Pausa' : 'Inicio'}
        </button>
        <button className="button"  onClick={reset}>
          Reset
        </button>
      </div>
      <button className="button"  onClick={cambioTipo}>
          {tipo}
      </button>
      {tipo === 'Cuenta Regresiva' && <input type="number" 
      ref={myRef} onChange={agregaSegundos} 
      placeholder="Ingresa Segundos" autoComplete="off"/>} 
    </div>
  );
};


export default Timer;
