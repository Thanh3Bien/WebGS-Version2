import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Giữ lại Router
import './App.css';
import Header from './Header/Header';
import Sidebar from './Components/SideBar/SideBar';
import Footer from './Footer/Footer';
import ParentList from './Components/ParentList/Parent';
import TeacherList from './Components/TeacherList/Teacher';
import Home from './Components/HomePage/Home';
import ExistingClass from './Components/ExistingClassPage/ExistingClass';
import Contact from './Components/ContactPage/Contact';
import Recruitment from './Components/RecruitmentPage/Recruitment';
import Introduce from './Components/IntroduceMemberPage/IntroduceMember';
import ParentKnow from './Components/ParentListContent/ParentKnow/ParentKnow';
import FindingRegister from './Components/ParentListContent/FindingRegister/FindingRegister';
import Fee from './Components/ParentListContent/Fee/Fee';
import TutoringService from './Components/ParentListContent/TutoringServices/TutoringService';
import AdmissionRule from './Components/TeacherListContent/AdmissionRules/AdmissionRule';
import WorkingRegister from './Components/TeacherListContent/WorkingRegister/WorkingRegister';
import Zalo from './Components/ZaloSupport/Zalo';

const headerImage = "https://res.cloudinary.com/dsq0mei34/image/upload/v1739883298/nhzcrwhzvtg12q8lfcad.png";

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 220);
    }, 0); // Trì hoãn 100ms
  
    return () => clearTimeout(timer);
  }, []);

  
  const [activeSection, setActiveSection] = useState('home');

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  const handleListClick = (section) => {
    setActiveSection(section);
  };

  return (
    <Router>
      <div className="App">
        <img src={headerImage} alt="Header Background" className="header-image" title="Hình ảnh đầu trang cho web"/>
        <Header onNavClick={handleNavClick} />
        <Sidebar />
        <div className="container">
          <div className="sidebar">
            <ParentList onListClick={handleListClick} />
            <TeacherList onListClick={handleListClick} />
          </div>
          <div className="content">
            <section id="home">
              {activeSection === 'home' && <Home />}
            </section>
            <section id="lop-day-hien-co">
              {activeSection === 'lop-day-hien-co' && <ExistingClass />}
            </section>
            <section id="gia-su-hien-co">
              {activeSection === 'gia-su-hien-co' && <Introduce />}
            </section>
            <section id="tuyen-dung-gia-su-gioi">
              {activeSection === 'tuyen-dung-gia-su-gioi' && <Recruitment />}
            </section>
            <section id="lien-he">
              {activeSection === 'lien-he' && <Contact />}
            </section>
            <section id="finding-register">
              {activeSection === 'finding-register' && <FindingRegister />}
            </section>
            <section id="parent-know">
              {activeSection === 'parent-know' && <ParentKnow />}
            </section>
            <section id="dich-vu-day-kem">
              {activeSection === 'dich-vu-day-kem' && <TutoringService />}
            </section>
            <section id="fee">
              {activeSection === 'fee' && <Fee />}
            </section>
            <section id="noi-quy-nhan-lop">
              {activeSection === 'noi-quy-nhan-lop' && <AdmissionRule />}
            </section>
            <section id="dang-ky-lam-gia-su">
              {activeSection === 'dang-ky-lam-gia-su' && <WorkingRegister />}
            </section>
          </div>
        </div>
        <Footer />
        <Zalo />
      </div>
    </Router>
  );
};

export default App;