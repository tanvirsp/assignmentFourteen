/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './PageTitle.css'
import { MdKeyboardArrowRight } from 'react-icons/md';


const PageTitle = ({title}) => {
    return (
        <section className="page-title-section">
            <div className="container">
                <div className="page-title-content">
                    <h2>{title}</h2>
                    <p> <Link to="/">Home </Link> <MdKeyboardArrowRight /> <span className='active'>{title}</span> </p>
                </div>
            </div>
            <div className="circle"></div>
            
        </section>
    );
};

export default PageTitle;