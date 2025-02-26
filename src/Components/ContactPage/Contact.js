import React from 'react';
import './Contact.css'

const Contact = () => {
  return (
    
    <div className="contact-container">
      {/* <h1>Liên Hệ</h1> */}
      <table className="contact-table">
        <thead>
          <tr>
            <th>Thông tin</th>
            <th>Mô tả</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Văn phòng 1</td>
            <td>162, đường Võ Thị Sáu, phường Thống Nhất, thành phố Biên Hòa, tỉnh Đồng Nai</td>
          </tr>
          <tr>
            <td>Điện thoại</td>
            <td>0393 687 033</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>www.vanphong1.com</td>
          </tr>
          <tr>
            <td>Văn phòng 2</td>
            <td>1334/10, khu phố 7, phường Tân Tiến, Tp Biên Hòa, tỉnh Đồng Nai</td>
          </tr>
          <tr>
            <td>Điện thoại</td>
            <td>0393 687 033</td>
          </tr>
          <tr>
            <td>Website</td>
            <td>
              <a href='https://www.giasugioibienhoa.com/' target="_blank" rel="noopener noreferrer">https://www.giasugioibienhoa.com/</a>
            </td>
          </tr>
          {/* <tr>
            <td>Văn phòng 3</td>
            <td>Địa chỉ văn phòng 3</td>
          </tr>
          <tr>
            <td>Điện thoại</td>
            <td>0123 456 787</td>
          </tr> */}
          {/* <tr>
            <td>Website</td>
            <td>www.vanphong3.com</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Contact;