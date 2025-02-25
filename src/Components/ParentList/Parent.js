import React from 'react';
import './Parent.css';
import { Link } from 'react-router-dom';

const ParentList = ({ handleListClick }) => {
  const listItems = [
    { id: 1, title: 'Đăng ký tìm gia sư', path: '/finding-register' },
    { id: 2, title: 'Gia sư hiện có', path: '/gia-su-hien-co' },
    { id: 3, title: 'Phụ huynh cần biết', path: '/parent-know' },
    { id: 4, title: 'Dịch vụ dạy kèm' , path: '/dich-vu-day-kem'},
    { id: 5, title: 'Học phí tham khảo' , path: '/fee'},
  ];

  return (
    <div className="parent-list">
       <div className="parentlisttitle-container">
          <h2>Dành cho phụ huynh</h2>
        </div>
        <ul>
                {listItems.map(item => (
                  <Link to={item.path} key={item.id}>
                  <li>
                    <span className="bullet"></span>
                    {item.title}
                  </li>
                  </Link>
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