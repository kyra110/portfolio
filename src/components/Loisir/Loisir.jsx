import PropTypes from "prop-types";
const Loisir = ({ title, texts, iconName }) => {
  // Récupérez l'icône spécifique en fonction du nom passé dans iconName
  const IconComponent = iconName;
  // console.log(texts);
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
          <IconComponent style={{ color: "hsl(0, 0%, 100%)" }} size={80} />
        </div>
      </div>
    </div>
  );
};

Loisir.propTypes = {
  title: PropTypes.string.isRequired,
  texts: PropTypes.array.isRequired,
  iconName: PropTypes.func.isRequired,
};

export default Loisir;
