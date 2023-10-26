import { Route, Routes } from "react-router";
import { Layout } from "./shared";
import "./App.css";
import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route paht="/" element={<Layout/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element="About company" />
        <Route path="/history" element="History" />
        <Route path="/characters" element="Characters" />
        <Route path="/forum" element="Forum" />
        <Route path="/questions" element="FAQ" />
        <Route path="/register" element="Register" />
        <Route path="/profile" element="Profile" />
      </Route>
    </Routes>
  );
}

export default App;
