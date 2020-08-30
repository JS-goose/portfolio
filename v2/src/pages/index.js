import React from "react";

import SEO from "../components/seo";

function IndexPage() {
  return (
    <>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <h1>Jonathan Sexton | Freelance Web Developer</h1>
    </>
  );
}

export default IndexPage;
