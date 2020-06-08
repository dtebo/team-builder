import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const MemberCard = (props) => {
    const {
        member,
        showAddForm
    } = props;
    
    if(!member) {
        // Display the add a member card
        return (
            <div className="member-card add-member" onClick={() => showAddForm()}>
                <section className="card-header">
                    <h2>Add a new member</h2>
                </section>
                <section className="card-body">
                    <FontAwesomeIcon icon={faPlus} />
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