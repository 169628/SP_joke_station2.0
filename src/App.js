import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container px-5 mt-5">
        <div className="row">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
