import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Footer from "./Comps/Footer"
import About from "./Pages/About";
import Service from "./Pages/Service";
import Room from "./Pages/Room";
import Team from "./Comps/Team";
import Contact from "./Pages/Contact";
import Header from "./Comps/Header";
import Booking from "./Pages/Booking";
import OurTeam from "./Pages/OurTeam";
import Testimonial from "./Pages/Testimonial";
function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<><Header /> <Home /> <Team /> <Footer /></>}></Route>
        <Route exact path="/about" element={<><Header /> <About /> <Team /> <Footer /></>}></Route>
        <Route exact path="/service" element={<><Header /> <Service /> <Team /> <Footer /></>}></Route>
        <Route exact path="/rooms" element={<><Header /> <Room /> <Footer /></>}></Route>
        <Route exact path="/booking" element={<><Header /> <Booking /> <Footer /></>}></Route>
        <Route exact path="/team" element={<><Header /> <OurTeam /> <Footer /></>}></Route>
        <Route exact path="/testimonial" element={<><Header /> <Testimonial /> <Footer /></>}></Route>
        <Route exact path="/contact" element={<><Header /> <Contact /> <Footer /></>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
