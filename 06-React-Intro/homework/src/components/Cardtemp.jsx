import React from "react";
import styles from './Cardtemp.module.css';

function Cardtemp ({ label, value }){
    return(
        <div className={styles.CardTemp}>
            <label> {label} </label>
            <span> {value} </span>
        </div>
    )
}

export default Cardtemp;