import React from 'react';
import './TeamMember.css';

const TeamMember = ({ name, position, bio }) => {
  return (
    <div className="team-member-card">
      <img src={`../../../public/images/${name.toLowerCase().replace(' ', '-')}.jpg`} alt={name} className="team-member-img" />
      <div className="team-member-info">
        <h3>{name}</h3>
        <p className="team-member-position">{position}</p>
        <p className="team-member-bio">{bio}</p>
      </div>
    </div>
  );
};

export default TeamMember;
