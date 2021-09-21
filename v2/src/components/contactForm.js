import React from "react";
import propTypes from "prop-types";

const ContactForm = (props) => {
  return (
    <article className={`bg-${props.bgColor} contact-form-container border border-1 sm:p-2 lg:p-12 rounded-sm shadow mb-8`}>
      <h2 className="text-myDarkRed sm:text-xlg md:text-2xl lg:text-3xl xl:text-4xl">{props.formTitle || "Let's get started on your project"}</h2>
      <p>I respond to all contact within 24 hours :)</p>
      <form className="contact-form" name="contact" method="POST" action="contact.php">
        <p className="invisible">
          <label htmlFor="bots-say-what">
            Bots say what? <input type="text" name="bots-say-what" id="bots-say-what" />
          </label>
        </p>
        <legend className="invisible">Information About You</legend>
        <fieldset>
          <p className="flex flex-col pb-4">
            <label htmlFor="visitor_name">What you like to be addressed as</label>
            <input
              type="text"
              name="visitor_name"
              id="visitor_name"
              pattern="[A-Z\sa-z]{3,30}"
              aria-required
              required
              minLength="3"
              maxLength="30"
              className="border border-1 p-2 rounded-sm"
              placeholder="First Name"
              aria-placeholder="First Name"
            />
          </p>
          <p className="flex flex-col pb-4">
            <label htmlFor="visitor_email">Your Email</label>
            <input
              type="email"
              name="visitor_email"
              id="visitor_email"
              aria-required
              required
              minLength="5"
              maxLength="60"
              className="border border-1 p-2 rounded-sm"
              placeholder="e.g. dave@gmail.com"
              aria-placeholder="e.g. dave@gmail.com"
            />
          </p>
          <p className="flex flex-col pb-4">
            <label htmlFor="visitor_message">Message</label>
            <textarea
              name="visitor_message"
              id="visitor_message"
              cols="50"
              rows="2"
              aria-required
              required
              maxLength="300"
              className="border border-1 p-2 rounded-sm"
              placeholder="Tell me about your project :)"
              aria-placeholder="Tell me about your project :)"
            ></textarea>
          </p>
        </fieldset>
        <button
          type="submit"
          className="flex text-white shadow-lg bg-myDarkRed p-1 rounded transform hover:scale-105 transition-all duration-700 ease-in-out hover:underline hover:bg-myDarkRed"
        >
          <span className="contact-form-button-span">Submit Message</span>{" "}
          <svg
            className="mt-1 md:mt-2 pr-1"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="done_outline_24px">
              <path
                id="icon/action/done_outline_24px"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.43005 13.44L19.77 2.1L24 6.33L8.43005 21.9L0 13.47L4.22998 9.24L8.43005 13.44ZM21.1699 6.33L19.7699 4.93L8.42993 16.27L4.22998 12.07L2.82996 13.47L8.42993 19.07L21.1699 6.33Z"
                fill="white"
                fillOpacity="1"
              />
            </g>
          </svg>
        </button>
      </form>
    </article>
  );
};

ContactForm.propTypes = {
  bgColor: propTypes.string.isRequired,
  formTitle: propTypes.string.isRequired
};

export default ContactForm;
