import './App.css';
import {HashRouter as Router, Route} from "react-router-dom";
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
      <Route exact path= "/about" component={About} />
      <Route exact path= "/projects" component={ProjectPage} />
      <Route exact path= "/resume" component={Resume} />
      {/* <Footer /> */}
      {/* </Container> */}
      </>
    </Router>
  );
}

export default App;
