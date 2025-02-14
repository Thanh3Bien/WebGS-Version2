import React from 'react';
import './Parent.css';
import { Link } from 'react-router-dom';

const ParentList = ({ handleListClick }) => {
  const listItems = [
    { id: 1, title: 'Đăng ký tìm gia sư' },
    { id: 2, title: 'Gia sư hiện có' },
    { id: 3, title: 'Phụ huynh cần biết' },
    { id: 4, title: 'Dịch vụ dạy kèm' },
    { id: 5, title: 'Học phí tham khảo' },
  ];

  return (
    <div className="parent-list">
      <h2>Dành cho phụ huynh</h2>
        <ul>
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
      </ul>
    </div>
  );
};

export default ParentList;