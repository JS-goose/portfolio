import React from "react";

const Footer = () => (
  <footer className="text-white">
    <article className="flex justify-between p-4 mx-auto text-sm md:p-8">
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
          <li>Freelance Developer (links back to home)</li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </article>
    <article className="flex justify-between p-4 mx-auto text-sm md:p-8">
      <p>
        Created by{` `}
        <a className="font-bold no-underline" href="https://bryant.io" target="_blank" rel="noopener noreferrer">
          Jonathan Sexton
        </a>
      </p>

      <p>
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
