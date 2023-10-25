import { Route, Routes } from "react-router";
import { Layout } from "./shared";
import "./App.css";
import { Home } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route paht="/" element={<Home />} />
        <Route paht="/about" element="About" />
      </Route>
    </Routes>
  );
}

export default App;
