import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Importing components
import Header from "./components/Layout/header";
import Footer from "./components/Layout/footer"

// Importing pages
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Details from "./pages/details";

function App() {
 return (
  <Router>
   <div className="main-app">
    <Header />
    <Routes>
     <Route index element={<Home />}></Route>
     <Route path={"/About"} element={<About />}></Route>
     <Route path={"/Contact"} element={<Contact />}></Route>
     <Route path={"/details"} element={<Details />}></Route>
    </Routes>
    <Footer />
   </div>
  </Router>
 );
}

export default App;
