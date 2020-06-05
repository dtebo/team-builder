import React from 'react';

import MemberCard from './MemberCard';

const MemberList = ({memberList}) => {
    return (
        <div className="members">
            {memberList.map((member) => {
                // render member cards here
                return <MemberCard key={member.id} member={member} />
            })}
        </div>
    );
};

export default MemberList;