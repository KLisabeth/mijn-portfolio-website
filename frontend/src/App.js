import { BrowserRouter, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Signin from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
    <Header/>
<Route path="/" exact={true} component={Home}/>
<Route path="/contact" exact={true} component={Contact}/>
<Route path="/projectlist" exact={true} component={Projects}/>
<Route path="/bloglist" exact={true} component={Blogs}/>
<Route path="/signin" exact={true} component={Signin}/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
