import { BrowserRouter, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <BrowserRouter>
    <Header/>
<Route path="/" exact={true} component={Home}/>
<Route path="/contact" exact={true} component={Contact}/>
<Route path="/projectlist" exact={true} component={Projects}/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
