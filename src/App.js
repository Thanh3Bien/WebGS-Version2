import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';
import Header from './Header/Header';
import ParentList from './Components/ParentList/Parent';
import TeacherList from './Components/TeacherList/Teacher';
import Home from './Components/HomePage/Home'
import ParentKnow from './Components/ParentListContent/ParentKnow/ParentKnow';

const App = () => {
  const [activePage, setActivePage] = useState('home'); // Trạng thái để theo dõi trang hiện tại

  const handleListClick = (id) => {
    if (id === 3) {
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
          <TeacherList handleListClick={handleListClick} /> {/* Thêm TeacherList */}
        </div>
        <div className="content">
          {activePage === 'home' && <Home />}
          {activePage === 'parentKnow' && <ParentKnow />}
        </div>
      </div>
    </div>
  );
};

export default App;
