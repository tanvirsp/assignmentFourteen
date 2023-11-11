import './TeamMember.css';
import SectionTitle from "../SectionTitle/SectionTitle";
import TeamMemberCard from '../TeamMemberCard/TeamMemberCard';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';


const TeamMember = () => {

    const [memberData, setMemberData] = useState(null);

    useEffect( ()=>{
        fetch( "database/teamMemberData.json")
        .then(res => res.json())
        .then(data => setMemberData(data))

    } , []);

    if(memberData === null){
        return <Loader />
    }


    return (
        <section className="container">
            <SectionTitle title="Our Team Member" des="Check our awesome team members" />
            <div className="row">
                {
                    memberData.map( (member, index) => <TeamMemberCard key={index} member={member} /> )
                }
            

            </div>
            
        </section>
    );
};

export default TeamMember;