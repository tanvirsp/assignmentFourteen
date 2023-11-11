import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./compoments/Footer/Footer";
import Header from "./compoments/Header/Header";
import Home from "./pages/Home";
import Subscribe from "./compoments/Subscribe/Subscribe";
import Team from "./pages/Team";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";



const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          
          
        </Routes>
        <Subscribe />
        <Footer />
      
      
      </BrowserRouter>
  );
};

export default App;