import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import NavBar from "./components/components/NavBar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <NavBar />
    <App />
  </>
);
