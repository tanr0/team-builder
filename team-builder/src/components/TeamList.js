import React from "react";

const TeamList = props => {
  return (
    <div className="team-list">
      {props.teamlist.map(teamMember => (
        <div className="Team Member" key={teamMember.id}>
          <h2>{teamMember.tmName}</h2>
          <h3>{teamMember.role}</h3>
          <h4>{teamMember.battleSwag}</h4>
        </div>
      ))}
    </div>
  );
};

export default TeamList;
