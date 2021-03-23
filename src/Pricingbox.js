import { useEffect, useState } from "react";

const Pricingbox = ({ price }) => {
    console.log(price);
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
        
    
    const [priceBasic, setPriceBasic] = useState(0);
    const [priceProf, setPriceProf] = useState(0);
    const [priceMaster, setPriceMaster] = useState(0);
    useEffect(() => {
        const x = pricingList[price];
        console.log(x);
        const y = x.basic; 
        const z = x.prof; 
        const w = x.master;
        setPriceBasic(y)
        setPriceProf(z);
        setPriceMaster(w);  
    }, [price]); 

    
        return ( 
            <main>
                
                <div className="price-rectangle white-box">
                    <div className="pricing-text">
                        <p className="pricing-text-space">Basic</p>
                        <h2>{priceBasic}</h2>
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
                        <h2>{priceProf}</h2>
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
                        <h2>{priceMaster}</h2>
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
