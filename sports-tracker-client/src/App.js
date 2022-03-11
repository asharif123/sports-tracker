import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import News from "./pages/News";
import ErrorPage from "./pages/Error";
import Highlights from "./pages/Highlights";
import {useContext} from "react";
import {CountContext} from "./ContextProvider";
import { useNavigate } from "react-router-dom"


function App() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { state, dispatch } = useContext(CountContext);


  //when refreshing, user stays logged In
  
  useEffect(() => {
    const isLoggedIn = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    if (isLoggedIn) {
      console.log(isLoggedIn);
      dispatch({ type: 'LOGGIN' });
      navigate('/highlights')
    }
  }, []);

  return (
    <>
      
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/highlights" element={<Highlights />}></Route>
          <Route path="/newspage" element={<News />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
    </>
  );
}

export default App;
