import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      {/* <h3>Liên Hệ</h3> */}
      <table className="contact-table">
        <thead>
          <tr>
            <th>Thuộc Tính</th>
            <th>Thông Tin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Văn phòng 1</td>
            <td>Địa chỉ văn phòng 1</td>
          </tr>
          <tr>
            <td>Điện thoại</td>
            <td>0123 456 789</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>www.vanphong1.com</td>
          </tr>
          <tr>
            <td>Văn phòng 2</td>
            <td>Địa chỉ văn phòng 2</td>
          </tr>
          <tr>
            <td>Điện thoại</td>
            <td>0123 456 788</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>www.vanphong2.com</td>
          </tr>
          <tr>
            <td>Văn phòng 3</td>
            <td>Địa chỉ văn phòng 3</td>
          </tr>
          <tr>
            <td>Điện thoại</td>
            <td>0123 456 787</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>www.vanphong3.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Contact;