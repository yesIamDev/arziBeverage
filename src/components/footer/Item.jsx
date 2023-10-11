import React from "react";

export default function Item({ links, title }) {
  return (
    <ul>
      <h1 className="mb-1 font-semibold text-xl md:text-3xl">{title}</h1>
      {links.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-100 hover:text-teal-400 duration-300 text-lg cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
