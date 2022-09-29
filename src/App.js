import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navigation from "./routes/navigation/navigation.component";
import About from "./routes/about/about.component";
import Home from "./routes/home/home.component";

function App() {
  return (
    <Routes>
      <Route path="/" element=<Navigation />>
        <Route index element=<Home /> />
        <Route path="/about" element=<About /> />
      </Route>
    </Routes>
  );
}

export default App;
