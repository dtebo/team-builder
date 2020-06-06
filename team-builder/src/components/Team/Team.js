import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';

const Team = ({teams}) => {
    const params = useParams();

    const id = Number(params.id);

    const currentTeam = teams.find(t => t.id === id);

    useEffect(() => {
        setTeam(currentTeam);
    }, [id]);


    const [team, setTeam] = useState();
    const [members, setMembers] = useState();
    const [memberToEdit, setMemberToEdit] = useState();


    const addNewMember = (member) => {
        setMembers([...members, {...member, id: Date.now()}]);
    };

    const editMember = (member) => {
        let idx = members.findIndex(mbr => mbr.id === member.id);

        let updatedArr = [...members];

        let item = {...updatedArr[idx], ...member};

        updatedArr[idx] = item;

        setMembers(updatedArr);
    };

    const getMemberToEdit = (memberToEdit) => {
        setMemberToEdit(memberToEdit);
    };

    return (
        <div className="team">
            <p>{currentTeam.name}</p>
        </div>
    );
};

export default Team;