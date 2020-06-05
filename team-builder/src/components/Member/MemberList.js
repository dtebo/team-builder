import React from 'react';

const MemberList = (props) => {
    return (
        <div className="members">
            {props.memberList.map((member) => {
                // render member cards here
            })}
        </div>
    );
};

export default MemberList;