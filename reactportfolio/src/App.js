import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import ProjectPage from "./pages/ProjectPage";
import Resume from "./pages/Resume";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <>
      {/* <Container> */}
      <Navbar />
      <Route exact path= "/reactportfolio/about" component={About} />
      <Route exact path= "/reactportfolio/projects" component={ProjectPage} />
      <Route exact path= "/reactportfolio/resume" component={Resume} />
      {/* <Footer /> */}
      {/* </Container> */}
      </>
    </Router>
  );
}

export default App;
