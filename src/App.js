import './style/style.scss';
import Footer from './components/Footer';
import Nav from './components/Nav';
import PageContent from "./components/PageContent";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <PageContent />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
