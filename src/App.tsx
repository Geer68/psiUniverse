import { Home } from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Professionals } from "./pages/Professionals";
import { Professional } from "./pages/Professional";
import { About } from "./pages/About";
import { Help } from "./pages/Help";
import { Page404 } from "./pages/ErrorPage";
import NavBar from "./components/components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="psychologists" element={<Professionals />} />
          <Route path="psychologists/:id" element={<Professional />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<Help />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
