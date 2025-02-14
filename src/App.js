import logo from './logo.svg';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import ParentList from './Components/ParentList/Parent';
import TeacherList from './Components/TeacherList/Teacher';
//Header Tag
import Home from './Components/HomePage/Home'
import Contact from './Components/ContactPage/Contact';

//ParentList
import ParentKnow from './Components/ParentListContent/ParentKnow/ParentKnow';
import FindingRegister from './Components/ParentListContent/FindingRegister/FindingRegister';
import Fee from './Components/ParentListContent/Fee/Fee';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <div className="sidebar">
            <ParentList />
            <TeacherList />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/lien-he" element={<Contact />} />
              <Route path="/parent-know" element={<ParentKnow />} />
              <Route path="/finding-register" element={<FindingRegister />} />
              <Route path="/fee" element={<Fee />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
