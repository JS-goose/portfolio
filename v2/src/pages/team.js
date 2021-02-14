import React from 'react';
import SEO from '../components/seo';
import TeamList from '../components/teamList'

const Team = () => (
  <>
    <SEO
      keywords={[
        `freelance`,
        `team`,
        `jonathan`,
        `sexton`,
        `development`,
        `website`,
      ]}
      title="Projects"
    />
    <div>
      <TeamList />
    </div>
  </>
);

export default Team;
