import React from 'react';

import MemberCard from './MemberCard';

const MemberList = (props) => {
    return (
        <div className="members">
            {props.memberList.map((member) => {
                // render member cards here
                return <MemberCard key={member.id} member={member} getMemberToEdit={props.getMemberToEdit} />
            })}
            <MemberCard key={'0000000000000'} />
        </div>
    );
};

export default MemberList;