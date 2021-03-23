import './App.css';
import "./components/Switch.css";
import Pricingbox from './Pricingbox';
import { useState } from "react";

function App() {
  const [price, setPrice] = useState(1);
  const [toggle, setToggle] = useState(false);
  const toggler = () =>{
      toggle ? setToggle(false): setToggle(true);
      console.log(toggle);
      toggle ? setPrice(1): setPrice(0);
    }
  
  return (
    <main>
    <header className="our-pricing">
      <h1 className="h1">Our Pricing</h1>

      <section className="annuall-monthly">
          <div class="space-around">
            <h3 className="h3">Annually</h3>
              <label className="switch1">
                  <input type="checkbox" onClick={() => toggler()}/>
                  <span className="slider1"/>
              </label>
            <h3 className="h3">Monthly</h3>
          </div>
          
      </section>
        <Pricingbox price={price}/>

    </header>
    
    </main>
  );
}
export default App;
