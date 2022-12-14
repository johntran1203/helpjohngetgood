import logo from './logo.svg';
import { useState, createContext } from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import Table from './components/Table';
import Navbar from './components/Navbar';
import ErrorPage from './components/ErrorPage';
import About from './components/About';
import Notes from './components/Notes';
import Info from './components/Info';
import { definition } from './components/data';

export const AppContext = createContext()

function App() {
  const [userName, setUserName] = useState("john")
  const [loading, setLoading] = useState(true)
  const [infos, setInfos] = useState(definition);
  console.log(infos)
  
  return (
    <div className="App">
      <AppContext.Provider value={{userName, setUserName}}>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home  />} />
          <Route path='/table' element={<Table />}/>
          <Route path='/contact' element={<Contact  />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/info' element={infos.map((info)=>{
            return (<Info key={info.id} {...info}/>)
          })}/>
          <Route path="*" element={<ErrorPage />}/>
        </Routes>
      </Router>
      <Notes />
      </AppContext.Provider>
   
    </div>
  );
}

export default App;
