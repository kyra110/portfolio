import { FaYoutube } from "react-icons/fa";
import { CiPizza } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
import { TbSeeding } from "react-icons/tb";
import { FaHandHoldingHeart } from "react-icons/fa";
import Loisir from "../../Loisir/Loisir.jsx";
import loisirs from "../../../data/loisirs.json";
const About = () => {
  // console.log(loisirs[0].text);
  const reactIcons = {
    FaYoutube: FaYoutube,
    CiPizza: CiPizza,
    IoGameControllerOutline: IoGameControllerOutline,
    TbSeeding: TbSeeding,
  };

  return (
    <section className="a-propos">
      <h1>à-propos !</h1>
      <div className="container-loisirs">
        {loisirs.map((loisir, index) => (
          <Loisir
            key={("loisir", index)}
            title={loisir.title}
            url={loisir.url}
            texts={loisir.text}
            iconName={reactIcons[loisir.iconName]}
          />
        ))}
      </div>
      <p className="note">
        Merci pour votre visite &nbsp;
        <FaHandHoldingHeart size={40}/>
      </p>
    </section>
  );
};

export default About;
