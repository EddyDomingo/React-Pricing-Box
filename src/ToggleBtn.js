import "./components/Switch.css";
import React, { useState } from 'react';

const ToggleBtn = ({ toggle,toggler}) => {
    // const [toggle, setToggle] = useState(false);
    // const toggler = () =>{
    //     toggle ? setToggle(false): setToggle(true);
    //     console.log(toggle);
    // }
    console.log(toggle)
    
    return ( 
        <div class="space-around">
        <h3 className="h3">Annually</h3>
        <label className="switch1">
            <input type="checkbox" />
            <span className="slider1"/>
        </label>
        <h3 className="h3">Monthly</h3>
        </div>
     );
}
 
export default ToggleBtn;