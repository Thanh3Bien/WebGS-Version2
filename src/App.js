import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Header from './Header/Header';
import ParentList from './Components/ParentList/Parent';
import TeacherList from './Components/TeacherList/Teacher';
import Home from './Components/HomePage/Home'

//ParentList
import ParentKnow from './Components/ParentListContent/ParentKnow/ParentKnow';
import FindingRegister from './Components/ParentListContent/FindingRegister/FindingRegister';

const App = () => {
  const [activePage, setActivePage] = useState('home'); // Trạng thái để theo dõi trang hiện tại

  const handleListClick = (id) => {
    if (id === 1) {
      setActivePage('findingRegister'); // Chuyển sang trang FindingRegister
    } else if (id === 3) {
      setActivePage('parentKnow'); // Chuyển sang trang ParentKnow
    } else {
      setActivePage('home'); // Quay lại trang Home cho các ID khác
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="sidebar">
          <ParentList handleListClick={handleListClick} />
          <TeacherList handleListClick={handleListClick} /> 
        </div>
        <div className="content">
          {activePage === 'home' && <Home />}
          {activePage === 'parentKnow' && <ParentKnow />}
          {activePage === 'findingRegister' && <FindingRegister />} 
        </div>
      </div>
    </div>
  );
};

export default App;
