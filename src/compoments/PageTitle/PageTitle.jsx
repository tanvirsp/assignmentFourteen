/* eslint-disable react/prop-types */
import './PageTitle.css'
import { MdKeyboardArrowRight } from 'react-icons/md';


const PageTitle = ({title}) => {
    return (
        <section className="page-title-section">
            <div className="container">
                <div className="page-title-content">
                    <h2>{title}</h2>
                    <p>Home <MdKeyboardArrowRight /> <span className='active'>{title}</span> </p>
                </div>
            </div>
            
        </section>
    );
};

export default PageTitle;