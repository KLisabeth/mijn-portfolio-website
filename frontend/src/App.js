import { BrowserRouter, Route} from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
    <Header/>
<Route to="/" exact={true} component={Home}/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
