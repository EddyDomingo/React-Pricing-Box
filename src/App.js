import './App.css';
import Switch from './components/Switch';
import Pricingbox from './Pricingbox';
import ToggleBtn from './ToggleBtn';

function App() {
  const Test = () => {
    console.log("Hello")
  }
  
  return (
    <main>
    <header className="our-pricing">
      <h1 className="h1">Our Pricing</h1>
      <section className="annuall-monthly">
          <ToggleBtn Test={Test}/>
      </section>
        <Pricingbox/>

    </header>
    
    </main>
  );
}
export default App;
