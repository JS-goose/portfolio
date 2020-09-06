import React from 'react';
import CTA from '../components/cta';
import SEO from '../components/seo';

function IndexPage() {
  return (
    <>
      <SEO
        keywords={[
          `freelance`,
          `home`,
          `jonathan`,
          `sexton`,
          `development`,
          `website`,
          `small business`,
        ]}
        title="Home"
      />
      <CTA></CTA>
    </>
  );
}

export default IndexPage;
