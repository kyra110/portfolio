import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Loisir = ({ title, texts, iconName,url }) => {
  // Récupérez l'icône spécifique en fonction du nom passé dans iconName
  const IconComponent = iconName;
    // Définir le style par défaut
    let iconStyle = { color: "hsl(0, 0%, 100%)" };
    let iconYoutube = { color: "red" };
  return (
    <div className="loisir">
      <h2>{title}</h2>
      <div className="content">
        <div className="text-content">
          {texts.map((text, index) => (
            <p key={"type", index}>{text}</p>
          ))}
        </div>
        <div className="icon-content">
        {url !== "" ? ( // Vérifie si l'URL n'est pas vide
            <Link to={url} target="_blank">
              <IconComponent style={iconYoutube} size={80} />
            </Link>
          ) : (
            // Si l'URL est vide, affiche seulement l'icône sans lien
            <IconComponent style={iconStyle} size={80} />
          )}
        </div>
      </div>
    </div>
  );
};

Loisir.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  texts: PropTypes.array.isRequired,
  iconName: PropTypes.func.isRequired,
};

export default Loisir;
