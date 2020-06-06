import React from 'react';

const MemberCard = (props) => {
    return (
        <div className="member-card">
            <section className="card-header">
                <h2>{`${props.member.firstName} ${props.member.lastName}`}</h2>
            </section>
            <section className="card-body">
                <p>{`Email: ${props.member.email}`}</p>
                <p>{`Role: ${props.member.role}`}</p>
            </section>
            <button onClick={(event) => props.editMember(props.member)}>Edit</button>
        </div>
    );
};

export default MemberCard;