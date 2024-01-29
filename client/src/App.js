import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";
import Journal from "./pages/Journal";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/library" element={<Library />}></Route>
          <Route path="/journal" element={<Journal />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
