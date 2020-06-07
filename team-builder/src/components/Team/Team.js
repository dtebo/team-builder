import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

import MemberList from '../Member/MemberList';
import Form from '../Form/Form';

const Team = (props) => {
    const params = useParams();

    const id = Number(params.id);

    const currentTeam = props.teams.find(t => t.id === id);

    useEffect(() => {
        setTeam(currentTeam);
        setMembers(currentTeam.members);
    }, [currentTeam]);


    const [team, setTeam] = useState();
    const [members, setMembers] = useState();
    const [memberToEdit, setMemberToEdit] = useState();


    const addNewMember = (member) => {
        setMembers([...members, {...member, id: Date.now()}]);
        updateTeam(members);
        props.getTeam(team);
    };

    const editMember = (member) => {
        // Grab the index of the member to update
        let idx = members.findIndex(mbr => mbr.id === member.id);

        // Grab a copy of the members array. We don't want to edit state directly!
        let updatedArr = [...members];

        // Grab the member to update based on the index
        let item = {...updatedArr[idx], ...member};

        updatedArr[idx] = item;

        setMembers(updatedArr);

        updateTeam(updatedArr);
    };

    const getMemberToEdit = (memberToEdit) => {
        // Get the member that needs edited
        setMemberToEdit(memberToEdit);
    };

    const updateTeam = (members) => {
        let t = props.teams.find((t) => t.id === team.id);

        let updatedTeam = {...t, members};

        setTeam(updatedTeam);
    };

    if(!team) return <h3>Loading...</h3>;

    return (
        <div className="team">
            <h1>{team.name}</h1>
            <MemberList memberList={team.members} getMemberToEdit={getMemberToEdit} />
            <Form addNewMember={addNewMember} memberToEdit={memberToEdit} editMember={editMember} />
        </div>
    );
};

export default Team;