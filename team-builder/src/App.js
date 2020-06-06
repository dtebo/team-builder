import React, {useState} from 'react';
import logo from './logo.svg';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MemberList from './components/Member/MemberList';

import { teamMembers } from './data';

function App() {
  const [teams, setTeams] = useState([{name: 'FakeCorp'}]);
  const [members, setMembers] = useState(teamMembers);
  const [memberToEdit, setMemberToEdit] = useState();

  const addNewMember = (member) => {
    setMembers([...members, {...member, id: Date.now()}]);
  };

  const editMember = (memberToEdit) => {
    setMemberToEdit(memberToEdit);
  };

  return (
    <div className="App">
      <Header teams={teams} />
      <MemberList memberList={members} editMember={editMember} />
      <Form addNewMember={addNewMember} memberToEdit={memberToEdit} />
    </div>
  );
}

export default App;
