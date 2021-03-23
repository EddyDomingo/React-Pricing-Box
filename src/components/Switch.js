import React, { useState } from 'react';
import "./Switch.css";


const Switch = ({ Test2 }) => {
    
    var obj = typeof Test2
    console.log(obj);
    return ( 
        <label className="switch1">
        <input type="checkbox" />
        <span className="slider1"/>
        </label>
     );
}
 
export default Switch ;