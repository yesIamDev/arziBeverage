

export default function Item({ links, title }) {
  return (
    <ul>
      <h1 className="mb-1 font-semibold text-lg md:text-2xl">{title}</h1>
      {links.map((link) => (
        <li key={link.name}>
          <a
            className="text-gray-100 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6"
            href={link.link}
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
