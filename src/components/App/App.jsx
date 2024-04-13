
import Header from "../Header/Header";
import Home from "../Home/Home";
import { BrowserRouter, Routes, Route,} from "react-router-dom";
import Projects from "../Projects/Projects";

const App = () => {
  const basename = import.meta.env.MODE === "production" ? "/portfolio" : "" ;
  return (
    <BrowserRouter basename={basename}>
        <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projets" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
