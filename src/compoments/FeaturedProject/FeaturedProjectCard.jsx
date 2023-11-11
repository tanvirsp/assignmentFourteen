/* eslint-disable react/prop-types */
import './FeaturedProject.css'

const FeaturedProjectCard = ({data}) => {
    return (
        <div className="col-md-6">
            <div className='restCard'>
                <img src={data["image"]} alt="" />
                <p>{data["date"]} </p>
                <h6>{data["title"]} </h6>
            </div>
            
        </div>
    );
};

export default FeaturedProjectCard;