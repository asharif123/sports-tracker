import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import ErrorPage from "./pages/Error";
import Highlights from "./pages/Highlights";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  //verify if user logged in
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  
  return (
    <>
      <Router>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/highlights" element={<Highlights />}></Route>
          <Route path="/newspage" element={<News />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
