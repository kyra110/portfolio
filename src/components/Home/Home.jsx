import { Link } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Contact from "../Contact/Contact";
import { useState } from 'react';

const Home = () => {

  // Gere l'ouverture et la dermeture de formulaire de contact
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

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
            <FaYoutube style={{ color: 'red'  }} size={100}/>
          </Link>
          <Link
            to="https://github.com/kyra110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithubSquare style={{ color: 'hsl(0, 0%, 100%)'  }} size={100} />
          </Link>
          <Link
            to="https://www.linkedin.com/in/michel-garcia-b70858293/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin style={{ color: 'rgb(10,102,194)'  }} size={100} />
          </Link>
          <Link
            to="https://twitter.com/KyraCoding"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareXTwitter style={{ color: 'hsl(0, 0%, 100%)'  }} size={100}/>
          </Link>
        </div>
        <button onClick={openModal}>Discutons</button>
        <Contact isOpen={isModalOpen} onClose={closeModal}/>
      </div>
    </section>
  );
};

export default Home;
