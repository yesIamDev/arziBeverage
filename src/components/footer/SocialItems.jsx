
export default function SocialItems({ Icons }) {
  return (
    <div className="text-white mb-3">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className=" cursor-pointer inline-flex items-center rounded-ful mx-3 text-3xl hover:text-gray-400 duration-300"
        >
          <a href="https://www.linkedin.com/in/arzi-beverage-company-45a9a0296/">
            <ion-icon name={icon.name}></ion-icon>
          </a>
        </span>
      ))}
    </div>
  );
}
