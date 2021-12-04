import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import Header from "./shared/Header";
import Footer from "./shared/Footer";
import Recepie from "./recepie/Recepie";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Recepie" component={Recepie} />
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
