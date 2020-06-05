import React, {useState} from 'react';
import logo from './logo.svg';

import Header from './components/Header/Header';
import Form from './components/Form/Form';

function App() {
  const [teams, setTeams] = useState([{name: 'team1'}, {name: 'team2'}, {name: 'team3'}]);

  return (
    <div className="App">
      <Header teams={teams} />
      <Form />
    </div>
  );
}

export default App;
