import logo from './logo.svg';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import image from '../src/assets/ec45042a-9053-4270-9532-f57dd49ed206.jpg';
import Header from './Header/Header';
import Sidebar from './Components/SideBar/SideBar'; 
import Footer from './Footer/Footer';
import ParentList from './Components/ParentList/Parent';
import TeacherList from './Components/TeacherList/Teacher';
import CarouselImage from './Components/CarouselImage/CarouselImage';
//Header Tag
import Home from './Components/HomePage/Home'
import ExistingClass from './Components/ExistingClassPage/ExistingClass';
import Contact from './Components/ContactPage/Contact';
import Recruitment from './Components/RecruitmentPage/Recruitment';
import Introduce from './Components/IntroduceMemberPage/IntroduceMember';

//ParentList
import ParentKnow from './Components/ParentListContent/ParentKnow/ParentKnow';
import FindingRegister from './Components/ParentListContent/FindingRegister/FindingRegister';
import Fee from './Components/ParentListContent/Fee/Fee';
import TutoringService from './Components/ParentListContent/TutoringServices/TutoringService';

//TeacherList
import AdmissionRule from './Components/TeacherListContent/AdmissionRules/AdmissionRule';
import WorkingRegister from './Components/TeacherListContent/WorkingRegister/WorkingRegister';

const App = () => {
  
  return (
    <Router>
      <div className="App">
      <img src={image} alt="Header Background" className="header-image" />
        <Header />
        {/* <CarouselImage /> */}
        <Sidebar/>
        <div className="container">
          <div className="sidebar">
            <ParentList />
            <TeacherList />
          </div>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/gia-su-hien-co" element={<Introduce />} />
              <Route path="/lien-he" element={<Contact />} />
              <Route path="/lop-day-hien-co" element={<ExistingClass />} />
              <Route path="/tuyen-dung-gia-su-gioi" element={<Recruitment />} />

              <Route path="/parent-know" element={<ParentKnow />} />
              <Route path="/finding-register" element={<FindingRegister />} />
              <Route path="/dich-vu-day-kem" element={<TutoringService />} />
              <Route path="/fee" element={<Fee />} />



              <Route path="/noi-quy-nhan-lop" element={<AdmissionRule />} />
              <Route path="/dang-ky-lam-gia-su" element={<WorkingRegister />} />
            </Routes>
          </div>
        </div>
        <Footer/>
      </div>
      
    </Router>
  );
};


export default App;
