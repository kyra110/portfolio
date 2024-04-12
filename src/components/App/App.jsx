
import Header from "../Header/Header";
import Home from "../Home/Home";
import { BrowserRouter, Routes, Route,} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
        <Header/>
      <Routes>
          <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
