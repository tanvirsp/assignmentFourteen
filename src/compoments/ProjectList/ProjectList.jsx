import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import SectionTitle from "../SectionTitle/SectionTitle";
import ProjectCard from "../ProjectCard/ProjectCard";


const ProjectList = () => {
    const [projectData, setProjectData] = useState(null);

    useEffect( ()=>{
        fetch( "database/projectData.json")
        .then(res => res.json())
        .then(data => setProjectData(data))

    }, []);


    if(projectData === null){
        return <Loader />
    }





    return (
        <section className='container'>
            <SectionTitle title="All Project" des="Better Agency/SEO Solution At Your Fingertips" />
            <div className="row gy-4">
                {
                    projectData.map( (project, index) =><ProjectCard key={index}  project={project} />  )
                }
            </div>

            
        </section>
    );
};

export default ProjectList;