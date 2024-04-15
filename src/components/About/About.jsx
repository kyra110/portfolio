import { MdMovieFilter } from "react-icons/md";
import { CiPizza } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";
import { TbSeeding } from "react-icons/tb";
import Loisir from "../../components/Loisir/Loisir.jsx";
import loisirs from "../../data/loisirs.json";
const About = () => {
  // console.log(loisirs[0].text);
  const reactIcons = {
    "MdMovieFilter": MdMovieFilter,
    "CiPizza": CiPizza ,
    "IoGameControllerOutline": IoGameControllerOutline,
    "TbSeeding": TbSeeding
  }
  
  return (
    <section className="a-propos">
      <h1>J&apos;aime bien !</h1>
      <div className="container-loisirs">
      {loisirs.map((loisir, index) => (      
        <Loisir
          key={"loisir",index}
          title={loisir.title}
          texts={loisir.text}
          iconName={reactIcons[loisir.iconName]}
        />
          ))}
      </div>
      <h3>Je vous souhaite une bonne visite.</h3>
    </section>
  );
};

export default About;
