/* eslint-disable react/prop-types */
import './ProjectCard.css';

const ProjectCard = ({project}) => {
    const {title, img} = project
    return (
        <div className='col-md-6'>
            <div className='project-card'>
                <img src={img} alt={title} />
                <h4>{title}</h4>

            </div>
        </div>
    )
};

export default ProjectCard;