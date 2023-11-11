import './FeaturedProject.css'
import SectionTitle from "../SectionTitle/SectionTitle";
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import FeaturedProjectCard from './FeaturedProjectCard';


const FeaturedProject = () => {

    const [projectkData, setProjectData] = useState(null);
    

    useEffect( ()=>{
        fetch( "database/featuredProjectData.json")
        .then(res => res.json())
        .then(data => setProjectData(data))

    } , []);


    if(projectkData === null){
        return <Loader />
    }

    //distribute proejct
    const [firstProject , ...restProjects] = projectkData;
    
    


    
    return (
        <section className="feature-section">
            <div className="container">
                <SectionTitle title="Featured Project" des="We provide the Perfect Solution to your business growth" />

                <div className="row g-4">
                    <div className="col-md-6">
                        <div className='firstCard'>
                            <img src={firstProject["image"]} alt="" />
                            <p>{firstProject["date"]} </p>
                            <h4>{firstProject["title"]} </h4>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row g-4">
                            {
                                restProjects.map( (data, index) => <FeaturedProjectCard key={index} data={data} />  )
                            }
                        </div>
                    </div>
                </div>


            </div>
            
            
        </section>
    );
};

export default FeaturedProject;