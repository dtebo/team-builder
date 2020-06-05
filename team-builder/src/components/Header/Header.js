import React from 'react';

const Header = (props) => {
    return(
        <div className='header-nav'>
            <h1>Team Manager</h1>
            {props.teams.map((team) => {
                return <div>{team.name}</div>
            })}
        </div>
    );
};

export default Header;