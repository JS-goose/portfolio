import React from 'react';
import TeamMember from './teamMember';

const TeamList = (props) => {
  return (
    <div className={`${props.teamListContainerClassName} team-list-container`}>
      <ul>
        <li>
          <TeamMember />
          <TeamMember />
          <TeamMember />
          <TeamMember />
          <TeamMember />
          <TeamMember />
        </li>
      </ul>
    </div>
  );
};

export default TeamList;
