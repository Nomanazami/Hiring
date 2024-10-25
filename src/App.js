import './App.css';
import Navbar from "./components/Navbar"
import Card from './components/Card';
import Categories from './components/Categories';
import Jobs from './components/Jobs';
import ButtonAppBar from './components/Navbar';


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { Category } from '@mui/icons-material';

function App() {

  return (
    <>
      <Navbar/>
      <div className='hirmain'>

      <BrowserRouter>
      <Routes>
        <Route path="/category" element={<Categories />} />
        {/* <Route path="/jobs" element={<ButtonAppBar><Jobs /></ButtonAppBar>} /> */}
      </Routes>
    </BrowserRouter>


      <Card/>
      </div>



    </>
  );
}

export default App;

// function App() {
//   return (
//  <div>
//   <NavBar/>
//   <JobDetail />

//   {/* <div>
//     useEffect(function(){
//       console.log("useeffect wala")
      
//     },[])
//     fetch("https://dummyjson.com/users")
//     .
//   </div> */}
  
//  </div>
//   );
// }
