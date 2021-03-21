import Switch from "./components/Switch";

const ToggleBtn = ({ Test }) => {
    console.log(Test);
    const Test2 = console.log(Test)
    return ( 
        <div class="space-around">
        <h3 className="h3">Annually</h3>
        <Switch Test2={Test2} />
        <h3 className="h3">Monthly</h3>
        </div>
     );
}
 
export default ToggleBtn;