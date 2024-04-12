import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <div className="home__infos">
        <div className="infos__logo">
          <h1>Salut , c&apos;est Michel !</h1>
          <p>
            Développeur Front-End
            <img src="./LogoReact.png" alt="Logo React" />
          </p>
        </div>
        <div className="container__photo__kyra">
          <img className="photoKyra" src="./photoKyraCube.png" alt="Photo Kyra" />
        </div>
      </div>
      <div className="home__social">
        <div className="social">
          <Link
            to="https://www.youtube.com/channel/UCcs9j6AZWBkrfuLz9W8tknA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./LogoYoutube.png" alt="Logo Youtube" />
          </Link>
          <Link
            to="https://github.com/kyra110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="./LogoGithub.png" alt="Logo Github" />
          </Link>
        </div>
        <button>Discutons</button>
      </div>
    </section>
  );
};

export default Home;
