import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamForm from './components/TeamForm';
import TeamList from './components/TeamList';

function App() {

const [teamState, setTeamState] = useState(
  [
    {id:1,
    tmName: 'Bro-bi wun Kenobi',
    role: 'Super Ninja',
    battleSwag: 'thatDude#1131',
  }
]);

const addTeamHandler = newTeamMember =>{
  console.log('adding TM', newTeamMember);
  setTeamState([...teamState, newTeamMember]);
};
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>The Team</h1>
          <TeamForm addTeamMember={addTeamHandler} />
          <TeamList teamlist={teamState} />
          </header>
    </div>
  );
}

export default App;
