import { Link } from "gatsby";
import React from "react";

const d = new Date();
const year = d.getFullYear();

const articles = [
  {
    title: "Get a Basic Understanding of the Life Cycles of Software Development",
    link: "https://jonathansexton.me/blog/get-a-basic-understanding-of-the-life-cycles-of-software-development/",
  },
  {
    title: "How to Install and Begin Using TypeScript",
    link: "https://jonathansexton.me/blog/how-to-install-and-begin-using-typescript/",
  },
  {
    title: "SQL Create Table Statement - With Example Syntax",
    link: "https://www.freecodecamp.org/news/sql-create-table-statement-with-example-syntax/",
  },
  {
    title: "SQL Update Statement — Example Queries for Updating Table Values",
    link: "https://www.freecodecamp.org/news/sql-update-statement-example-queries-for-updating-table-values/",
  },
];
const Footer = () => (
  <footer className="text-white bg-myPurple">
    <article className="flex justify-between mx-auto text-sm md:p-8 bg-myRed">
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
          <li>
            Follow me on <a href="https://twitter.com/jj_goose">Twitter</a>
          </li>
          <li>
            Follow me on <a href="https://www.instagram.com/js_goose/">Instagram</a>
          </li>
          <li>
            Follow me on <a href="https://www.linkedin.com/in/jj-goose/">LinkedIn</a>
          </li>
          <li>
            Follow me on <a href="https://www.facebook.com/jonathansextonwebdev">Facebook</a>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          {articles.map((article, index) => {
            return (
              <li data-key={index + 1} key={index + 1}>
                <a href={article.link} rel="noopener noreferrer">
                  {article.title}
                </a>
              </li>
            );
          })}
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
