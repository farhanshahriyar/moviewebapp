import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Login from './components/Login'
import './App.css';
import Header from "./components/Header";
// import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
  </BrowserRouter>
  );
}

export default App;
