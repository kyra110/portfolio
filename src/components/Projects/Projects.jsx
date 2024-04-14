import { useState } from 'react';
import projects from '../../data/projects.json'
import ProjectDetails from '../ProjectDetails/ProjectDetails';
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
          <div className="projet-1" onMouseOver={() => handleProjectHover("projet-1")}   onMouseOut={handleProjectLeave}>
            <img src={projects[0].image} alt={projects[0].title} />
            {selectedProject === "projet-1" && (
              <ProjectDetails title={projects[0].title} description={projects[0].description} technologies={projects[0].technologies}/>
            )}
          </div>
          <div className="projet-2" onMouseOver={() => handleProjectHover("projet-2")}   onMouseOut={handleProjectLeave}>
          <img src={projects[1].image} alt={projects[1].title} />
          {selectedProject === "projet-2" && (
              <ProjectDetails title={projects[1].title} description={projects[1].description} technologies={projects[1].technologies}/>
            )}
          </div>
        </div>
        <div className="projects_M">
          <div className="projet-3" onMouseOver={() => handleProjectHover("projet-3")}   onMouseOut={handleProjectLeave}>
          <img src={projects[2].image} alt={projects[2].title} />
          {selectedProject === "projet-3" && (
            <ProjectDetails title={projects[2].title} description={projects[2].description} technologies={projects[2].technologies}/>
            )}
          </div>
        </div>
        <div className="projects_R">
          <div className="projet-4" onMouseOver={() => handleProjectHover("projet-4")}   onMouseOut={handleProjectLeave}>
          <img src={projects[3].image} alt={projects[3].title} />
          {selectedProject === "projet-4" && (
            <ProjectDetails title={projects[3].title} description={projects[3].description} technologies={projects[3].technologies}/>
            )}
          </div>
          <div className="projet-5" onMouseOver={() => handleProjectHover("projet-5")}   onMouseOut={handleProjectLeave}>
          <img src={projects[4].image} alt={projects[4].title} />
          {selectedProject === "projet-5" && (
            <ProjectDetails title={projects[4].title} description={projects[4].description} technologies={projects[4].technologies}/>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
