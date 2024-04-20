import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Professionals } from "./pages/Professionals";
import { Professional } from "./pages/Professional";
import { Contact } from "./pages/Contact";
import { Help } from "./pages/Help";
import { Page404 } from "./pages/ErrorPage";
import NavBar from "./components/components/NavBar";
import { Footer } from "./components/components/Footer";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="psychologists" element={<Professionals />} />
          <Route path="psychologists/:id" element={<Professional />} />
          <Route path="contact" element={<Contact />} />
          <Route path="help" element={<Help />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
