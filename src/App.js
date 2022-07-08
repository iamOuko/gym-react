import { BrowserRouter,  Route, Routes} from 'react-router-dom';
import Login from "./components/Login";
import Home from "./Pages/Home";
import Profile from './Pages/Profile';
import './App.css';
import Record from './Pages/Record';
import Signup from './Pages/Signup';
import Service from './components/Service';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile  />} />
          <Route path="/records" element={<Record  />} />
          <Route path='/service' element={<Service />} />
        </Routes>
        
      </BrowserRouter>
    </>
      
     
    
  );
}

export default App;
