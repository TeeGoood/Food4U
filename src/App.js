import Navbar from "./Nav";
import Home from "./Home";
import Details from "./Details";
import About from "./About";
import Search from "./Search";
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import CategoryMeals from "./CategoryMeals";
import Footer from "./Footer";


function App() {
  return (
    <Router>
      <div className="App m-auto  text-gray-500 font-quicksand ">
        <Navbar />
        <div className="content flex justify-center">
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/about" element={<About />} />
            <Route path="/search" element={<Search />} />
            <Route path="/categoryMeals/:category" element={<CategoryMeals />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
