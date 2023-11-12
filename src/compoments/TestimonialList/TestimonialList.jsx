import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
import Loader from "../Loader/Loader";
import TestimonialCard from "../TestimonialCard/TestimonialCard";


const TestimonialList = () => {

    const [testimonialData, setTestimonialData] = useState(null);

    useEffect( ()=>{
        fetch( "database/testimonialData.json")
        .then(res => res.json())
        .then(data => setTestimonialData(data))

    }, []);


    if(testimonialData === null){
        return <Loader />
    }

    

    return (
        <section className='container'>
            <SectionTitle title="Testimonial List" des="Better Agency/SEO Solution At Your Fingertips" />
            <div className="row gy-4">
                {
                    testimonialData.map( (testimonial, index) =><TestimonialCard key={index}  testimonial={testimonial} />  )
                }
            </div>

            
        </section>
    );
};

export default TestimonialList;