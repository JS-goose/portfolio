import React from 'react';

const services = [
  { number: `1`, desc: `text about the service here` },
  { number: `2`, desc: `text about the service here` },
  { number: `3`, desc: `text about the service here` },
  { number: `4`, desc: `text about the service here` },
  { number: `5`, desc: `text about the service here` },
  { number: `6`, desc: `text about the service here` },
  { number: `7`, desc: `text about the service here` },
];

const ServicesList = () => (
  <div className="bg-white flex flex-col justify-between h-full mt-12 p-1 border border-white grid-row-3 rounded-sm">
    <div className="services-list border border-red-500 p-2">
      <ul>
        {services.map((service) => (
          <li key={service.number}>
            {service.number}. {service.desc}
          </li>
        ))}
      </ul>
    </div>
    <div className="why-hire-me border border-purple-500 p-2">
      <ul>
        <li>Hire me because [reason]</li>
        <li>Hire me because [reason]</li>
        <li>Hire me because [reason]</li>
        <li>Hire me because [reason]</li>
        <li>Hire me because [reason]</li>
        <li>Hire me because [reason]</li>
        <li>Hire me because [reason]</li>
        <li>Hire me because [reason]</li>
        <li>Hire me because [reason]</li>
        <li>Hire me because [reason]</li>
        <li>Hire me because [reason]</li>
        <li>Hire me because [reason]</li>
      </ul>
    </div>
  </div>
);

export default ServicesList;
