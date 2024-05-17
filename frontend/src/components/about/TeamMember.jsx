import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, position, bio }) => {
  return (
    <div className="team-member">
      <div className="member-info">
        <h3>{name}</h3>
        <p><strong>{position}</strong></p>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
