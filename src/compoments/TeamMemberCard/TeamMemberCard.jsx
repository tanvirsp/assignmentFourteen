/* eslint-disable react/prop-types */
import './TeamMemberCard.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';



const TeamMemberCard = ({member}) => {
    return (
        <div className='col-md-4'>
            <div className='team-member-card'>
                <img src={member["image"]} alt="" />
                <h3>{member["name"]}</h3>
                <ul className='member-social-links'>
                    <li><a href={member["facebook"]}> <FaFacebookF />   </a></li>
                    <li><a href={member["twitter"]}> <FaTwitter />  </a></li>
                    <li><a href={member["linked"]}> <FaLinkedinIn /> </a></li>
                    <li><a href={member["instagram"]}> <FaInstagram /> </a></li>
                </ul>
            </div>
            
        </div>
    );
};

export default TeamMemberCard;