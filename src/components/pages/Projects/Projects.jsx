import { useState } from "react";
import projects from "../../../data/projects.json";
import ProjectDetails from "../../ProjectDetails/ProjectDetails";
import { Link } from "react-router-dom"; 
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectHover = (project) => {
    // Mettre à jour l'état avec le projet sélectionné
    setSelectedProject(project);
    // Ouvrir un nouveau composant ou une modale pour afficher les détails du projet
    // Vous devrez implémenter cela selon votre préférence (modale, nouvelle page, etc.)
  };

  const handleProjectLeave = () => {
    setSelectedProject(null); // Réinitialiser le projet sélectionné lorsque le curseur quitte la zone du projet
  };
  return (
    <section className="projects">
      <h1>Mes Projets</h1>
      <div className="container__projects">
        <div className="projects_L">
          <Link to="https://kyra110.github.io/kasa" target="_blank"
            className="projet-1"
            onMouseOver={(e) => handleProjectHover(e.currentTarget.className)}
            onMouseOut={handleProjectLeave}
          >
            <img src={projects[0].image} alt={projects[0].title} />
            {selectedProject === "projet-1" && (
              <ProjectDetails
                title={projects[0].title}
                description={projects[0].description}
                descriptionMobile={projects[0].description_mobile}
                technologies={projects[0].technologies}
              />
            )}
          </Link>
          <Link to="https://kyra110.github.io/ArgentBank/" target="_blank"
            className="projet-2"
            onMouseOver={(e) => handleProjectHover(e.currentTarget.className)}
            onMouseOut={handleProjectLeave}
          >
            <img src={projects[1].image} alt={projects[1].title} />
            {selectedProject === "projet-2" && (
              <ProjectDetails
                title={projects[1].title}
                description={projects[1].description}
                descriptionMobile={projects[1].description_mobile}
                technologies={projects[1].technologies}
              />
            )}
          </Link>
        </div>
        <div className="projects_M">
          <Link to="https://kyra110.github.io/SmallGameSnake/" target="_blank"
            className="projet-3"
            onMouseOver={(e) => handleProjectHover(e.currentTarget.className)}
            onMouseOut={handleProjectLeave}
          >
            <img src={projects[2].image} alt={projects[2].title} />
            {selectedProject === "projet-3" && (
              <ProjectDetails
                title={projects[2].title}
                description={projects[2].description}
                descriptionMobile={projects[2].description_mobile}
                technologies={projects[2].technologies}
              />
            )}
          </Link>
        </div>
        <div className="projects_R">
          <Link to="https://kyra110.github.io/P6-OpenClassrooms/FrontEnd/index.html" target="_blank"
            className="projet-4"
            onMouseOver={(e) => handleProjectHover(e.currentTarget.className)}
            onMouseOut={handleProjectLeave}
          >
            <img src={projects[3].image} alt={projects[3].title} />
            {selectedProject === "projet-4" && (
              <ProjectDetails
                title={projects[3].title}
                description={projects[3].description}
                descriptionMobile={projects[3].description_mobile}
                technologies={projects[3].technologies}
              />
            )}
          </Link>
          <Link to="https://kyra110.github.io/portfolio/" target="_blank"
            className="projet-5"
            onMouseOver={(e) => handleProjectHover(e.currentTarget.className)}
            onMouseOut={handleProjectLeave}
          >
            <img src={projects[4].image} alt={projects[4].title} />
            {selectedProject === "projet-5" && (
              <ProjectDetails
                title={projects[4].title}
                description={projects[4].description}
                descriptionMobile={projects[4].description_mobile}
                technologies={projects[4].technologies}
              />
            )}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
