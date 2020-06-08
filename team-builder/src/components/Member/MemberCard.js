import React from 'react';

const MemberCard = (props) => {
    const {
        member
    } = props;
    
    if(!member) {
        return (
            <div className="member-card">
                <section className="card-header">
                    <h2>Add a new member</h2>
                </section>
                <section className="card-body">
                    <p>+</p>
                </section>
            </div>
        );
    }

    return (
        <div className="member-card">
            <section className="card-header">
                <h2>{`${member.firstName} ${member.lastName}`}</h2>
            </section>
            <section className="card-body">
                <p>{`Email: ${member.email}`}</p>
                <p>{`Role: ${member.role}`}</p>
            </section>
            <button onClick={(event) => props.getMemberToEdit(member)}>Edit</button>
        </div>
    );
};

export default MemberCard;