import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Author from "./pages/Author";
import Follow from "./pages/Follow";
import Save from "./pages/Save";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container px-5 mt-5">
        <div className="row">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/author" element={<Author />}></Route>
            <Route path="/follow" element={<Follow />}></Route>
            <Route path="/save" element={<Save />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
