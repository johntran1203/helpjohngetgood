import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Table from './components/Table';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/table' element={<Table />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </Router>
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
