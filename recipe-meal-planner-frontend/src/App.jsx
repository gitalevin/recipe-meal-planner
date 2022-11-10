import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./About";
import { Header } from "./Header";
import { Home } from "./Home";
import { Signup } from "./Signup";
import { Footer } from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
