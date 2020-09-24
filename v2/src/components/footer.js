import { Link } from "gatsby";
import React from "react";

const d = new Date();
const year = d.getFullYear();

const Footer = () => (
  <footer className="text-white">
    <article className="flex justify-between p-4 mx-auto text-sm md:p-8 bg-myRed">
      <div>
        <ul>
          <li>
            <a href="mailto:hello@jonathansexton.me?subject=Email_inquiry_from_jonathansexton.me">Email Me</a>
          </li>
          <li>About Me</li>
          <li>Blog</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Follow me on Twitter</li>
          <li>Follow me on Instagram</li>
          <li>Follow me on LinkedIn</li>
          <li>Follow me on Facebook</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">Freelance Developer</Link>
          </li>
          <li>Freelance Consultant (links to Consultant page)</li>
          <li>Resume (download)</li>
        </ul>
      </div>
    </article>
    <article className="flex justify-between p-4 mx-auto text-sm md:p-8">
      <p>
        Created by{` `}
        Jonathan Sexton &copy; {year}
      </p>

      <p>
        I code on{` `}
        <a
          className="font-bold no-underline"
          href="https://github.com/JS-goose"
          target="_blank"
          rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </article>
  </footer>
);

export default Footer;
