import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <div className='header-nav'>
            <h1>Team Manager</h1>
            {props.teams.map((team) => {
                return (
                    <NavLink to={`/teams/${team.id}`}>
                        <div>{team.name}</div>
                    </NavLink>
                );
            })}
        </div>
    );
};

export default Header;