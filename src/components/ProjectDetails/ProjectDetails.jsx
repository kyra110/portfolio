import PropTypes from "prop-types";
import { TbHandClick } from "react-icons/tb";
const ProjectDetails = ({ title, description, technologies,descriptionMobile }) => {
  return (
    <div className="project-details">
      <TbHandClick style={{ color: 'hsl(0, 0%, 100%)'  }} size={30} />
      <h2>{title}</h2>
      <p className="description">{description}</p>
      <p className="descriptionMobile">{descriptionMobile }</p>
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
  descriptionMobile : PropTypes.string.isRequired,
  technologies: PropTypes.array.isRequired,
};

export default ProjectDetails;
