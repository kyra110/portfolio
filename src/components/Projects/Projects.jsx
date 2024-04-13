

const Projects = () => {
  return (
    <section className="projects">
      <h1>Mes Projets</h1>
      <div className="container__projects">
        <div className="projects_L">
          <div className="projet-1">
            <img src="./Booki1.jpg" alt="Photo du projet N3" />
          </div>
          <div className="projet-2">
          <img src="./kaza1.png" alt="Photo du projet N8" />
          </div>
        </div>
        <div className="projects_M">
          <div className="projet-3">
          <img src="./snakeJS.png" alt="Photo de mon projet Perso jeux Snake" />
          </div>
        </div>
        <div className="projects_R">
          <div className="projet-4">
          <img src="./sophieB1.png" alt="Project N6 sophie Bluel" />
          </div>
          <div className="projet-5">
          <img src="./photoKyraCube.png" alt="Project N12 portfolio Michel" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
