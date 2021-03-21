import React, { useState } from 'react';
import "./Switch.css";


const Switch = ({ Test2 }) => {
    const [toggle, setToggle] = useState(false);
    const toggler = () =>{
        toggler ? setToggle(false): setToggle(true);
    }
    var obj = typeof Test2
    console.log(obj);
    return ( 
        <label className="switch1">
        <input type="checkbox" onClick={()=> toggler()}/>
        <span className="slider1"/>
        </label>
     );
}
 
export default Switch ;