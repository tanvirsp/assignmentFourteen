/* eslint-disable react/prop-types */
import './TestimonialCard.css';


const TestimonialCard = ({testimonial}) => {
    const {name, designation, text, img} = testimonial;
    return (
        <div className="col-md-4">
            <div className="testimonail-card">
                <img src={img} alt={name} />
                <p>{text}</p>
                <h4>{name}</h4>
                <h6>{designation}</h6>
            </div>
            
        </div>
    );
};

export default TestimonialCard;