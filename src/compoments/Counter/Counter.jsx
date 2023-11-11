import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import CounterCard from "./CounterCard";

const Counter = () => {

    const [counterkData, setCounterData] = useState(null);

    useEffect( ()=>{
        fetch( "database/counterData.json")
        .then(res => res.json())
        .then(data => setCounterData(data))

    } , []);

    


    return (
        <section className="container">
            <div className="row">
                {
                    counterkData === null ? <Loader /> :
                    counterkData.map( (data, index) => <CounterCard key={index} data ={data} />  )
                }

            </div>
            
        </section>
    );
};

export default Counter;