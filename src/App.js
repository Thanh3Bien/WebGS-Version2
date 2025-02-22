import logo from './logo.svg';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
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

//ContactSupport
import Zalo from './Components/ZaloSupport/Zalo';
const headerImage = "https://res.cloudinary.com/dsq0mei34/image/upload/v1739883298/nhzcrwhzvtg12q8lfcad.png";

const App = () => {

  useEffect(() => {
    // Cuộn xuống vị trí mong muốn
    const timer = setTimeout(() => {
      window.scrollTo(0, 220);
    }, 0);

    return () => clearTimeout(timer);
  }, []);
  return (
    <Router>

      <div className="App">
      {/* <h1 className="">TRUNG TÂM GIA SƯ BIÊN HÒA</h1> */}
      <img src={headerImage} alt="Header Background" className="header-image" title="Hình ảnh đầu trang cho web"/>
        {/* <ImageUploader /> */}
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

      </div>
      <Footer/>
      <Zalo/>
    </Router>

  );
};



export default App;

