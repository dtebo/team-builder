import React from 'react';

const MemberCard = ({member}) => {
    return (
        <div className="member-card">
            <section className="card-header">
                <h2>{`${member.firstName} ${member.lastName}`}</h2>
            </section>
            <section className="card-body">
                <p>{`Email: ${member.email}`}</p>
                <p>{`Role: ${member.role}`}</p>
            </section>
        </div>
    );
};

export default MemberCard;