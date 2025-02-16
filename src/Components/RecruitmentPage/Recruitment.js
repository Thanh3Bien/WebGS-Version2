import React from 'react';
import { Link } from 'react-router-dom';
import './Recruitment.css';

const Recruitment = () => {
    return (
        <div className="existing-class-container">
            <div className="existing-class-title">TUYỂN DỤNG</div>
            <div className="recruitment-content">
                {/* <p>Gia sư Tài Năng Biên Hòa</p>
                <h3>Tuyển dụng</h3> */}
                <ul>
                    <li>Cần tuyển 100 Giáo viên dạy kèm, có bằng cấp và kinh nghiệm dạy kèm tại nhà, kèm học sinh yếu kém, luyện thi học sinh giỏi các cấp, ôn thi lớp 9 lên 10, ôn thi tốt nghiệp Đại học...</li>
                    <li>Cần tuyển 500 sinh viên có học lực khá giỏi, hiện đang học tại các trường tại tp. Biên Hòa, yêu thích dạy kèm</li>
                </ul>
                <h4>Yêu cầu:</h4>
                <ul className="requirement-list">
                    <li>+ Có thẻ Giáo viên, Sinh viên, các bằng cấp liên quan</li>
                    <li>+ Tác phong nghiêm túc</li>
                    <li>+ Yêu thích giảng dạy</li>
                </ul>
                <h4>Đăng kí và phỏng vấn:</h4>
                <p>Trung tâm Gia Sư Biên Hòa</p>
                <ul>
                    <li>Đăng kí: tại mục đăng kí làm gia sư: <Link to="/dang-ky-lam-gia-su">Đăng ký làm gia sư</Link></li>
                    <li>Chúng tôi sẽ liên hệ và phỏng vấn</li>
                    <li>Điện Thoại: 0939.418.939 (24/7)</li>
                </ul>
            </div>
        </div>
    );
};

export default Recruitment;