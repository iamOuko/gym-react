import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Login from "./components/Login";
import Home from "./Pages/Home";

import './App.css';

function App() {
  return (
    <>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
      
     
    
  );
}

export default App;
