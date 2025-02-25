import React from 'react';
import './Parent.css';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll'; // Sử dụng react-scroll

const ParentList = ({ onListClick }) => {
  const listItems = [
    { id: 1, title: 'Đăng ký tìm gia sư', section: 'finding-register' },
    { id: 2, title: 'Gia sư hiện có', section: 'gia-su-hien-co' },
    { id: 3, title: 'Phụ huynh cần biết', section: 'parent-know' },
    { id: 4, title: 'Dịch vụ dạy kèm' , section: 'dich-vu-day-kem'},
    { id: 5, title: 'Học phí tham khảo' , section: 'fee'},
  ];

  return (
    <div className="parent-list">
       <div className="parentlisttitle-container">
          <h2>Dành cho phụ huynh</h2>
        </div>
        <ul>
        {listItems.map(item => (
          <li key={item.id}>
            <Link 
              to={item.section} 
              smooth={true} 
              duration={500} 
              onClick={() => onListClick(item.section)} // Gọi hàm khi nhấp
            >
              <span className="bullet"></span>
              {item.title}
            </Link>
          </li>
        ))}
              </ul>
        {/* <ul>
          <li>
            <span className="bullet"></span>
            <Link to="/finding-register">Đăng Ký Tìm Gia Sư</Link> 
          </li>
          <li>
            <span className="bullet"></span>
            <Link to="/parent-know">Phụ huynh cần biết</Link>
          </li>
          <li>
            <span className="bullet"></span>
            <Link to="/fee">Học phí tham khảo</Link>
          </li>
      </ul> */}
    </div>
  );
};

export default ParentList;