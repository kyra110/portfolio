
import Header from "../Header/Header";
import Home from "../Home/Home";
import About from "../About/About";
import Projects from "../Projects/Projects";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Footer from "../Footer/Footer";

const App = () => {
  const basename = import.meta.env.MODE === "production" ? "/portfolio" : "" ;
  return (
    <BrowserRouter basename={basename}>
        <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projects />} />
          <Route path="/a-propos" element={<About />} />
      </Routes>
        <Footer/>
    </BrowserRouter>
  );
};

export default App;
