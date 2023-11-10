import { Route, Routes } from "react-router";
import { Layout } from "./shared";
import "./App.css";
import {
  About,
  CharacterItem,
  Characters,
  Forum,
  ForumItem,
  History,
  HistoryItem,
  Home,
  Login,
  Profile,
  Register,
} from "./pages";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { PrivateRoute } from "./shared/components/PrivateRoute/PrivateRoute";

function App() {
  return (
    <>
      <Routes>
        <Route paht="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/history" element={<History />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/characters/:id" element={<CharacterItem />} />
          <Route
            path="/forum"
            element={
              <PrivateRoute>
                <Forum />
               </PrivateRoute>
            }
          />
           <Route
            path="/forum/:id"
            element={
                <ForumItem />
            }
          />
          <Route path="/questions" element="FAQ" />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
