import { useEffect, useState } from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './OurServices.css'
import Loader from '../Loader/Loader';
import ServiceCard from '../ServiceCard/ServiceCard';

const OurServices = () => {
    const [serviceData, setServiceData] = useState(null);

    useEffect( ()=>{
        fetch( "database/serviceData.json")
        .then(res => res.json())
        .then(data => setServiceData(data))

    }, []);


    if(serviceData === null){
        return <Loader />
    }



    return (
        <section className='container'>
            <SectionTitle title="Our All Services" des="We Provide BestWeb design services" />
            <div className="row gy-4">
                {
                    serviceData.map( (service, index) => <ServiceCard key={index} service={service} />  )
                }
            </div>

            
        </section>
    );
};

export default OurServices;