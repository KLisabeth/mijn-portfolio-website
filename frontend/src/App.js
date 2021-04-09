import { BrowserRouter, Route, Switch } from "react-router-dom";
import AdminRoute from "./AdminRoute";
import Header from "./components/Header";
import Admin from "./pages/admin/Admin";
import CreateEditBlogs from "./pages/admin/CreateEditBlogs";
import CreateEditProjects from "./pages/admin/CreateEditProjects";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Signin from "./pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/projectlist" component={Projects} />
        <Route path="/bloglist" component={Blogs} />
        <Route path="/signin" component={Signin} />
        <AdminRoute path="/admin" exact={true} component={Admin} />
        <AdminRoute exact path="/blogs" component={CreateEditBlogs} />
        <AdminRoute exact path="/projects" component={CreateEditProjects} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
