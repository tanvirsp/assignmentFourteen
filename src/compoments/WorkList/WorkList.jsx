import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import WorkListCard from "./WorkListCard";
import Loader from "../Loader/Loader";

const WorkList = () => {
    const [workData, setWorkData] = useState(null);

    useEffect( ()=>{
        fetch( "database/workList.json")
        .then(res => res.json())
        .then(data => setWorkData(data))

    } , [])



    return (
        <section className="container">
            <SectionTitle title="Work List" des="We provide the Perfect Solution to your business growth" />
    
            <div className="row">
                {
                    workData === null ?  <Loader /> 
                    : workData.map( (data, index ) => <WorkListCard key={index} data ={data} /> )
                }
            </div>
            
        </section>
    );
};

export default WorkList;