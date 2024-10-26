import './App.css';
import Navbar from "./components/Navbar";
import Card from './components/Card';
import Categories from './components/Categories';
import Jobs from './components/Jobs';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='hirmain'>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/jobs" element={<Jobs />} />
        </Routes>
        <Card />
      </div>
    </BrowserRouter>
  );
}

export default App;
