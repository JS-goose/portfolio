/* eslint-disable import/named */
/* eslint-disable import/namespace */
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
  <footer className="text-white sm:text-base md:text-lg">
    <article className="flex justify-between mx-auto p-4 md:p-8">
      <div>
        <ul>
          <li className="pb-4 hidden lg:inline-block">
            <h4 className="text-white text-xl underline">Me</h4>
          </li>
          <li>
            <a href="mailto:hello@jonathansexton.me?subject=Email_inquiry_from_jonathansexton.me">Email Me</a>
          </li>
          <li>
            <Link to="/about">About Me</Link>
          </li>
          <li>
            <a href="https://jonathansexton.me/blog" target="__blank" rel="noopener noreferrer">
              Blog
            </a>
          </li>
          <li>
            <a href="https://jonathansexton.me" target="__blank" rel="noopener noreferrer">
              Home
            </a>
          </li>
        </ul>
      </div>
      <div>
        <ul className="w-full">
          <li className="pb-4 hidden lg:inline-block">
            <h4 className="text-white text-xl underline">Connect</h4>
          </li>
          <li>
            <a
              href="https://twitter.com/jj_goose"
              target="__blank"
              rel="noopener noreferrer"
            >
              Twitter
              </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/jj-goose/"
              target="__blank"
              rel="noopener noreferrer"
            >
              LinkedIn
              </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/js_goose/"
              target="__blank"
              rel="noopener noreferrer"
            >
              Instagram
              </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/jonathansextonwebdev"
              target="__blank"
              rel="noopener noreferrer"
            >
              Facebook
              </a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:inline">
        <ul>
          <li className="pb-4 hidden lg:inline-block">
            <h4 className="text-white text-xl underline">Recent Articles</h4>
          </li>
          {articles.map((article, index) => {
            return (
              <li data-key={index + 1} key={index + 1}>
                <a href={article.link} rel="noopener noreferrer" className="hover:underline">
                  {article.title}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <ul>
          <li className="pb-4 hidden lg:inline-block">
            <h4 className="text-white text-xl underline">Work</h4>
          </li>
          <li>
            <Link className="bg-myDarkRed" to="#hire-me">Hire Me Today!</Link>
          </li>
          <li>
            <a href="https://jonathansexton.me/#services" rel="noreferrer noopener">Services</a>
          </li>
          <li>
            <Link to="/consulting">Freelance Consultant</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>
      </div>
    </article>
    <article className="flex justify-between p-4 mx-auto text-sm md:p-8">
      <p>
        Created by{` `}
        Jonathan Sexton &copy; {year}
      </p>

      <p>
        I write code on{` `}
        <a className="font-bold hover:underline" href="https://github.com/JS-goose" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </p>
    </article>
  </footer>
);

export default Footer;
