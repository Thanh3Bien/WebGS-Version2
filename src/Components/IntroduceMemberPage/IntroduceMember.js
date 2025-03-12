// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './IntroduceMember.css';

// const IntroduceMember = () => {
//     const [tutorData, setTutorData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 4;

//     useEffect(() => {
//         const fetchTutorData = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get('https://webgsapi.azurewebsites.net/api/Tutors'); // Thay đổi URL nếu cần
//                 if (Array.isArray(response.data) && response.data.length > 0) {
//                     setTutorData(response.data);
//                 } else {
//                     setError('Không có dữ liệu gia sư');
//                 }
//             } catch (err) {
//                 console.error('Error fetching tutor data:', err);
//                 if (axios.isAxiosError(err)) {
//                     setError(err.response?.data?.ErrorMessage || 'Có lỗi xảy ra khi tải dữ liệu');
//                 } else {
//                     setError('Có lỗi xảy ra: ' + err.message);
//                 }
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchTutorData();
//     }, []);

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = tutorData.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(tutorData.length / itemsPerPage);

//     const handleNextPage = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     const handlePrevPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     if (loading) return <div className="loading">Đang tải...</div>;
//     if (error) return <div className="error">{error}</div>;
//     if (tutorData.length === 0) return <div className="error">Không có dữ liệu</div>;

//     return (
//         <div className="introduce-container">
//             <div className="introduce-title">GIA SƯ HIỆN CÓ</div>
//             <ul className="tutor-list">
//                 {currentItems.map((tutor) => (
//                     <li key={tutor.tutorId} className="tutor-item">
//                         <h3>ID: <strong>{tutor.tutorId}</strong></h3>
//                         <p><strong>Tên:</strong> {tutor.tutorName}</p>
//                         <p><strong>Năm sinh:</strong> {tutor.birthYear}</p>
//                         <p><strong>Vị trí hiện tại:</strong> {tutor.currentPosition}</p>
//                         <p><strong>Trường:</strong> {tutor.school}</p>
//                         <p><strong>Chuyên ngành:</strong> {tutor.major}</p>
//                         <p><strong>Năm tốt nghiệp:</strong> {tutor.graduationYear}</p>
//                         <p><strong>Các cấp học:</strong> {tutor.teachingLevels}</p>
//                         <p><strong>Môn học:</strong> {tutor.subjects}</p>
//                         <p><strong>Khu vực:</strong> {tutor.area}</p>
//                         <p><strong>Thông tin khác:</strong> {tutor.otherInfo}</p>
//                         {tutor.photo && <img src={tutor.photo} alt={tutor.tutorName} className="tutor-photo" />}
//                     </li>
//                 ))}
//             </ul>
//             <div className="pagination">
//                 <button onClick={handlePrevPage} disabled={currentPage === 1}>Trước</button>
//                 <span>{currentPage} / {totalPages}</span>
//                 <button onClick={handleNextPage} disabled={currentPage === totalPages}>Sau</button>
//             </div>
//         </div>
//     );
// };

// export default IntroduceMember;

import React, { useEffect, useState } from 'react';
import './IntroduceMember.css';

const IntroduceMember = () => {
    const [tutorData, setTutorData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Dữ liệu gia sư mẫu
    const sampleTutorData = [
        {
            tutorId: 41953,
            tutorName: 'Võ Trường Thành',
            birthYear: 2002,
            currentPosition: 'Đã tốt nghiệp',
            school: 'Tự do',
            major: 'Sư phạm Toán học',
            graduationYear: 2024,
            teachingLevels: 'Từ lớp 6 đến lớp 12, Ôn Đại Học',
            subjects: 'Toán',
            area: 'Thành Phố Biên Hòa',
            otherInfo: 'Có 4 năm kinh nghiệm dạy thêm các lớp Toán cấp 2, cấp 3. Hiện đang tiếp tục học Cao học',
            photo: ''
        },
        {
            tutorId: 41954,
            tutorName: 'Nguyễn Văn Chương',
            birthYear: 2001,
            currentPosition: 'Đã tốt nghiệp',
            school: 'Tự do',
            major: 'Sư phạm Vật lý',
            graduationYear: 2023,
            teachingLevels: 'Từ lớp 6 đến lớp 12',
            subjects: 'Vật lý',
            area: 'Thành Phố Biên Hòa',
            otherInfo: 'Có 3 năm kinh nghiệm dạy thêm. Hiện đang làm việc tại trung tâm dạy thêm',
            photo: ''
        },
        {
            tutorId: 41955,
            tutorName: 'Trần Thị Bích',
            birthYear: 2000,
            currentPosition: 'Đã tốt nghiệp',
            school: 'Tự do',
            major: 'Sư phạm Hóa học',
            graduationYear: 2022,
            teachingLevels: 'Từ lớp 6 đến lớp 12',
            subjects: 'Hóa học',
            area: 'Thành Phố Biên Hòa',
            otherInfo: 'Có 5 năm kinh nghiệm dạy thêm. Hiện đang dạy tại một trường cấp 3',
            photo: ''
        },
        {
            tutorId: 41956,
            tutorName: 'Lê Minh Cường',
            birthYear: 2003,
            currentPosition: 'Đang học',
            school: 'Đại học',
            major: 'Sư phạm Toán học',
            graduationYear: 2025,
            teachingLevels: 'Từ lớp 6 đến lớp 12',
            subjects: 'Toán',
            area: 'Thành Phố Biên Hòa',
            otherInfo: 'Có 2 năm kinh nghiệm dạy thêm. Đang học năm 3 tại trường',
            photo: ''
        },
        {
            tutorId: 41957,
            tutorName: 'Phạm Thị Thùy Dương',
            birthYear: 2002,
            currentPosition: 'Đã tốt nghiệp',
            school: 'Tự do',
            major: 'Sư phạm Ngữ Văn',
            graduationYear: 2024,
            teachingLevels: 'Từ lớp 6 đến lớp 12',
            subjects: 'Ngữ Văn',
            area: 'Thành Phố Biên Hòa',
            otherInfo: 'Có 4 năm kinh nghiệm dạy thêm các lớp Ngữ Văn cấp 2, cấp 3',
            photo: ''
        },
        {
            tutorId: 41958,
            tutorName: 'Ngô Văn Trãi',
            birthYear: 1999,
            currentPosition: 'Đã tốt nghiệp',
            school: 'Tự do',
            major: 'Sư phạm Tiếng Anh',
            graduationYear: 2021,
            teachingLevels: 'Từ lớp 6 đến lớp 12',
            subjects: 'Tiếng Anh',
            area: 'Thành Phố Biên Hòa',
            otherInfo: 'Có 5 năm kinh nghiệm dạy thêm các lớp Tiếng Anh cấp 2, cấp 3',
            photo: ''
        },
        {
            tutorId: 41959,
            tutorName: 'Đỗ Thị Hồng Phúc',
            birthYear: 2002,
            currentPosition: 'Đang học',
            school: 'Đại học',
            major: 'Sư phạm Lịch sử',
            graduationYear: 2025,
            teachingLevels: 'Từ lớp 6 đến lớp 12',
            subjects: 'Lịch sử',
            area: 'Thành Phố Biên Hòa',
            otherInfo: 'Có 1 năm kinh nghiệm dạy thêm. Đang học năm 3 tại trường',
            photo: ''
        },
        {
            tutorId: 41960,
            tutorName: 'Bùi Minh Gia',
            birthYear: 2001,
            currentPosition: 'Đã tốt nghiệp',
            school: 'Tự do',
            major: 'Sư phạm Địa lý',
            graduationYear: 2023,
            teachingLevels: 'Từ lớp 6 đến lớp 12',
            subjects: 'Địa lý',
            area: 'Thành Phố Biên Hòa',
            otherInfo: 'Có 3 năm kinh nghiệm dạy thêm. Đang tìm kiếm cơ hội dạy thêm',
            photo: ''
        },
        {
            tutorId: 41961,
            tutorName: 'Nguyễn Văn Hoàng',
            birthYear: 2000,
            currentPosition: 'Đã tốt nghiệp',
            school: 'Tự do',
            major: 'Sư phạm Hóa Học',
            graduationYear: 2022,
            teachingLevels: 'Từ lớp 6 đến lớp 12',
            subjects: 'Hóa Học, Vật lý',
            area: 'Thành Phố Biên Hòa',
            otherInfo: 'Có 4 năm kinh nghiệm dạy thêm các lớp Sinh học cấp 2, cấp 3',
            photo: ''
        },
        {
            tutorId: 41962,
            tutorName: 'Trần Thị Yến',
            birthYear: 2003,
            currentPosition: 'Đang học',
            school: 'Đại học',
            major: 'Sư phạm Âm nhạc',
            graduationYear: 2025,
            teachingLevels: 'Từ lớp 6 đến lớp 12',
            subjects: 'Tiếng Anh',
            area: 'Thành Phố Biên Hòa',
            otherInfo: 'Có 2 năm kinh nghiệm dạy thêm. Đang học năm 3 tại trường',
            photo: ''
        }
    ];

    useEffect(() => {
        // Thay thế dữ liệu từ API bằng dữ liệu mẫu
        setTutorData(sampleTutorData);
        setLoading(false);
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = tutorData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(tutorData.length / itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    if (loading) return <div className="loading">Đang tải...</div>;
    if (error) return <div className="error">{error}</div>;
    if (tutorData.length === 0) return <div className="error">Không có dữ liệu</div>;

    return (
        <div className="introduce-container">
            <div className="introduce-title">GIA SƯ HIỆN CÓ</div>
            <ul className="tutor-list">
                {currentItems.map((tutor) => (
                    <li key={tutor.tutorId} className="tutor-item">
                        <h3>ID: <strong>{tutor.tutorId}</strong></h3>
                        <p><strong>Tên:</strong> {tutor.tutorName}</p>
                        <p><strong>Năm sinh:</strong> {tutor.birthYear}</p>
                        <p><strong>Vị trí hiện tại:</strong> {tutor.currentPosition}</p>
                        <p><strong>Trường:</strong> {tutor.school}</p>
                        <p><strong>Chuyên ngành:</strong> {tutor.major}</p>
                        <p><strong>Năm tốt nghiệp:</strong> {tutor.graduationYear}</p>
                        <p><strong>Các cấp học:</strong> {tutor.teachingLevels}</p>
                        <p><strong>Môn học:</strong> {tutor.subjects}</p>
                        <p><strong>Khu vực:</strong> {tutor.area}</p>
                        <p><strong>Thông tin khác:</strong> {tutor.otherInfo}</p>
                        {tutor.photo && <img src={tutor.photo} alt={tutor.tutorName} className="member-photo" />}
                    </li>
                ))}
            </ul>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Trước</button>
                <span>{currentPage} / {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Sau</button>
            </div>
        </div>
    );
};

export default IntroduceMember;