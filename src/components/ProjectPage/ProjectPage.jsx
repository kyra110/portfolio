import { useParams } from 'react-router-dom';
import projects from '../../data/projects.json';
import { Link } from "react-router-dom";
const findProjectID = (id) => {
  return projects.find((project) => project.id === id);
};
console.log(projects);
const ProjectPage = () => {

  const { id } = useParams();
  const project = findProjectID(id);
  console.log(project);
  console.log("voici l'id:" ,id);
  return (
    <section className="ContainerProjectPage">
    <div className="projectPage">
      <h1>{project.title}</h1>
      <p>Description: <br/><br/> {project.description}</p>
      <p>{project.technologies+" "}</p>
      <div className="links">
      <Link to={project.github}>Code</Link>
      <Link to={project.site}>Site web</Link>
      </div>
      <div className="container-img">
      <img src={project.image} alt={project.title} />
      </div>
    </div>
    </section>
  );
};

export default ProjectPage;