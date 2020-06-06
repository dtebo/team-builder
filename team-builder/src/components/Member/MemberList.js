import React from 'react';

import MemberCard from './MemberCard';

const MemberList = (props) => {
    return (
        <div className="members">
            {props.memberList.map((member) => {
                // render member cards here
                return <MemberCard key={member.id} member={member} editMember={props.editMember} />
            })}
        </div>
    );
};

export default MemberList;