import React from 'react';
import Cardtemp from "./components/Cardtemp";


import styles from "../components/Card.module.css";

export default function Card({max,min,name,img,onClose}) {
  // acá va tu código
  function handleOnClose() {
    if (typeof onClose === "function") onClose();
  }
  return(
  <div className={styles.card}>
   <button className={styles.closeButton} onClick={handleOnClose}>X</button>
   <span className={styles.cityName}>{name}</span>
   <Cardtemp label = "Min" value = {min}/> 
     <Cardtemp label = "Max" value = {max}/>
   <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono del clima"/> 
  </div>
  ); 
}

