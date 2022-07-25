import logo from "./logo.svg";
import "./App.css";
import Title from "./components/function";
import { Description } from "./components/function";
import Profile from "./components/Profile";
// import Card from "./components/card";
import Home from "./pages/home";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./pages/about";
import ApplicationForm from "./pages/applicationForm";
import Contact from "./pages/contact";
import Gallery from "./pages/gallery";
import Student from "./pages/studentData";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/application" element={<ApplicationForm />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/studentdata" element={<Student />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
