import PropTypes from "prop-types";

const ProjectDetails = ({ title, description, technologies }) => {
  return (
    <div className="project-details">
      <h2>{title}</h2>
      <p>{description}</p>
      <h3>Technologies utilisées</h3>
      <ul className="technos">
        {technologies.map((techno, index) => (
          <li key={index}>{techno},</li>
        ))}
      </ul>
    </div>
  );
};

ProjectDetails.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
};

export default ProjectDetails;
