import { Route, Routes, useParams } from "react-router";
import { Layout } from "./shared";
import "./App.css";
import {
  About,
  CharacterItem,
  Characters,
  Home,
  Login,
  Profile,
  Register,
} from "./pages";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route paht="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element="History" />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterItem />} />
          <Route path="/forum" element="Forum" />
          <Route path="/questions" element="FAQ" />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element="Profile" />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
