import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing components
import Header from "./components/Layout/header";
import Footer from "./components/Layout/footer"

// Importing pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
 return (
  <Router>
   <div className="main-app">
    <Header />
    <Routes>
     <Route path={"/"} element={<Home />}></Route>
     <Route path={"/about"} element={<About />}></Route>
     <Route path={"/contact"} element={<Contact />}></Route>
    </Routes>
    <Footer />
   </div>
  </Router>
 );
}

export default App;
