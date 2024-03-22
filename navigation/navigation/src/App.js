import Navbar from "./Component/Header/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import Err from "./Component/Err";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="*" exact element={<Err />} />
      </Routes>
    </>
  );
}

export default App;