// import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Search from './components/Search';
import View from './components/View';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

      <BrowserRouter>

      <Routes>
        <Route path="/" element={<Add/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/view" element={<View/>}/>
        <Route path="/search" element={<Search/>}/>
        
      </Routes>

      
      </BrowserRouter>







    </div>
  );
}

export default App;
