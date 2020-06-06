import React, {useState} from 'react';
import logo from './logo.svg';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MemberList from './components/Member/MemberList';

import { teamMembers } from './data';

function App() {
  const [teams, setTeams] = useState([{name: 'team1'}]);
  const [members, setMembers] = useState(teamMembers);

  const addNewMember = (member) => {
    setMembers([...members, member]);
  };

  return (
    <div className="App">
      <Header teams={teams} />
      <MemberList memberList={members} />
      <Form addNewMember={addNewMember} />
    </div>
  );
}

export default App;
