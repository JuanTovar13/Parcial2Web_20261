import "./App.css";
import { Login } from "./pages/Login/Login";
import { Home } from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </UserProvider>
  );
}

export default App;
