import React, { useState } from "react";

const TeamForm = props => {
 
  const [teamMember, setTeamMember] = useState({
    title: "",
    body: ""
  });
  console.log(teamMember);
  
  const changeHandler = event => {
    setTeamMember({
      ...teamMember,
      [event.target.name]: event.target.value
    });
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    props.addTeamMember({
      ...teamMember,
      id: Date.now()
    });

    setTeamMember({
      tmName: "",
      role: ""
    });
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <label htmlFor="teamMember">Team Member:</label>
      <input
        type="text"
        name="tmName"
        value={teamMember.tmName}
        onChange={changeHandler}
        placeholder="Enter your Name"
      /><br /> <br />
      <label htmlFor="role">Role:</label>
      <input
        type="text"
        name="role"
        placeholder="Enter your Role"
        value={teamMember.role}
        onChange={changeHandler}
      /><br /> <br />
      <label htmlFor='battleSwag'>Battle Swag:</label>
      <input
        type='text'
        name='battleSwag'
        placeholder='Your B.Net Tag'
        value={teamMember.battleSwag}
        onChange={changeHandler}
        />
      <br /> <br />
      <button type="submit">Join Team!</button>
    </form>
  );
};

export default TeamForm;
