import React from 'react';
import Cardtemp from "./Cardtemp";
import PropTypes from "prop-types";
import {Link} from "react-router-dom"

import styles from "./Card.module.css";

export default function Card({max,min,name,img,onClose,id}) {
  // acá va tu código
  function handleOnClose() {
    if (typeof onClose === "function") onClose();
  }
  return(
  <div className={styles.card}>
   <button className={styles.closeButton} onClick={handleOnClose}>X</button>
   <Link to={`/ciudad/${id}`} ></Link>
   <span className={styles.cityName}>{name}</span>
   <Cardtemp label = "Min" value = {min}/> 
     <Cardtemp label = "Max" value = {max}/>
   <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="icono del clima"/> 
  </div>
  ); 
}

Card.propTypes = {
  max: PropTypes.number,
  min: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  onClose: PropTypes.func,
}