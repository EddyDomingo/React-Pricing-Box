import { useState } from "react";

const Pricingbox = () => {
    const [price, setPrice] = useState();
    const pricingList = [
        {
            id: 1, 
            basic: "$19.99",
            prof: "$24.99",
            master: "$39.99"
             
        },
        {
            id: 2, 
            basic: "$199.99",
            prof: "$249.99",
            master: "$399.99"

        }
    ]
    const pricingData = () =>{
        const price = pricingList[0];
        const basePrice = price.master;
        console.log(basePrice);
    }
    pricingData();
    return ( 
        <main>
            <div className="price-rectangle white-box">
                <div className="pricing-text">
                    <p className="pricing-text-space">Basic</p>
                    <h2>$199.99</h2>
                    <p className="bottom-p">
                        <hr></hr>
                        500 GB Storage
                        <hr></hr>
                        2 Users Alllowed
                        <hr></hr>
                        Send up tp 3GB
                        <hr></hr> 
                    </p>
                    <button className="btn purplish-box">Learn More</button>
                </div>
            </div>
            <div className="price-rectangle purplish-box">
                <div className="pricing-text">
                    <p className="pricing-text-space">Professional</p>
                    <h2>$249.99</h2>
                    <p className="bottom-p">
                        <hr></hr>
                        1 GB Storage
                        <hr></hr>
                        5 Users Alllowed
                        <hr></hr>
                        Send up tp 10GB
                        <hr></hr> 
                    </p>
                    <button className="btn white-box">Learn More</button>
                </div>
            </div>
            <div className="price-rectangle white-box">
                <div className="pricing-text">
                    <p className="pricing-text-space">Master</p>
                    <h2>$399.99</h2>
                    <p className="bottom-p">
                        <hr></hr>
                        2 GB Storage
                        <hr></hr>
                        10 Users Alllowed
                        <hr></hr>
                        Send up tp 20GB
                        <hr></hr> 
                    </p>
                    <button className="btn purplish-box">Learn More</button>
                </div>
            </div>
        </main>
     );
}
 
export default Pricingbox;
