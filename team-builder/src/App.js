import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Team from './components/Team/Team';

import { devTeams } from './data';

function App() {
  const [teams, setTeams] = useState([...devTeams]);

  return (
    <div className="App">
      <Header teams={teams} />
      {/* <Form addNewMember={addNewMember} memberToEdit={memberToEdit} editMember={editMember} /> */}
      <Switch>
        <Route path="/teams/:id">
          <Team teams={teams} />
          {/* <MemberList memberList={members} getMemberToEdit={getMemberToEdit} /> */}
        </Route>
        <Route path="/" component={App} />
      </Switch>
    </div>
  );
}

export default App;
