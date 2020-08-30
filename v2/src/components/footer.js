import React from 'react';

const Footer = () => {
  return (
    <footer>
      <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
        <p>
          Created by{` `}
          <a
            className="font-bold no-underline"
            href="https://bryant.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jonathan Sexton
          </a>
        </p>

        <p>
          <a
            className="font-bold no-underline"
            href="https://github.com/JS-goose"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </p>
      </nav>
    </footer>
  );
};

export default Footer