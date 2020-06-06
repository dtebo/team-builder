import React, {useState} from 'react';
import logo from './logo.svg';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MemberList from './components/Member/MemberList';

import { devTeams } from './data';

function App() {
  const [teams, setTeams] = useState([...devTeams]);
  const [members, setMembers] = useState();
  const [memberToEdit, setMemberToEdit] = useState();

  const addNewMember = (member) => {
    setMembers([...members, {...member, id: Date.now()}]);
  };

  const editMember = (member) => {
    let idx = members.findIndex(mbr => mbr.id === member.id);

    let updatedArr = [...members];
    console.log(members);

    let item = {...updatedArr[idx], ...member};

    updatedArr[idx] = item;

    setMembers(updatedArr);
  };

  const getMemberToEdit = (memberToEdit) => {
    setMemberToEdit(memberToEdit);
  };

  return (
    <div className="App">
      <Header teams={teams} />
      <MemberList memberList={members} getMemberToEdit={getMemberToEdit} />
      <Form addNewMember={addNewMember} memberToEdit={memberToEdit} editMember={editMember} />
    </div>
  );
}

export default App;
