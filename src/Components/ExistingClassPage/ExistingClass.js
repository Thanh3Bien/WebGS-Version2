// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './ExistingClass.css';

// const ExistingClass = () => {
//     const [classData, setClassData] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//     const itemsPerPage = 4;

//     useEffect(() => {
//         const fetchClassData = async () => {
//             setLoading(true);
//             try {
//                 const response = await axios.get('https://webgsapi.azurewebsites.net/api/Classes');
//                 if (Array.isArray(response.data) && response.data.length > 0) {
//                     setClassData(response.data);
//                 } else {
//                     setError('Không có dữ liệu lớp học');
//                 }
//             } catch (err) {
//                 console.error('Error fetching class data:', err);
//                 if (axios.isAxiosError(err)) {
//                     setError(err.response?.data?.ErrorMessage || 'Có lỗi xảy ra khi tải dữ liệu');
//                 } else {
//                     setError('Có lỗi xảy ra: ' + err.message);
//                 }
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchClassData();
//     }, []);

//     const indexOfLastItem = currentPage * itemsPerPage;
//     const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//     const currentItems = classData.slice(indexOfFirstItem, indexOfLastItem);
//     const totalPages = Math.ceil(classData.length / itemsPerPage);

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
//     if (classData.length === 0) return <div className="error">Không có dữ liệu</div>;

//     return (
//         <div className="existing-class-container">
//             <div className="existing-class-title">Thông Tin Lớp Học</div>
//             <ul className="class-list">
//                 {currentItems.map((classItem) => (
//                     <li key={classItem.classId} className="class-item">
//                         <h3>ID Lớp: <strong>{classItem.classId}</strong></h3>
//                         <p><strong>Khối:</strong> {classItem.blockName}</p>
//                         <p><strong>Môn Học:</strong> {classItem.subjectName}</p>
//                         <p><strong>Ngày:</strong> {classItem.day}</p>
//                         <p><strong>Số lượng ngày trong tuần:</strong> {classItem.dayQuantityInWeek}</p>
//                         <p><strong>Mức lương:</strong> {classItem.salary.toLocaleString()} VNĐ</p>
//                         <p><strong>Mô tả yêu cầu:</strong> {classItem.requestDescription}</p>
//                         <p><strong>Điện thoại:</strong> {classItem.phone}</p>
//                         <p><strong>Trạng thái:</strong> {classItem.status}</p>
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

// export default ExistingClass;


import React, { useEffect, useState } from 'react';
import './ExistingClass.css';

const ExistingClass = () => {
    const [classData, setClassData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    // Dữ liệu lớp học mẫu
    const sampleClassData = [
        {
            classId: 1,
            blockName: '1',
            subjectName: 'Toán',
            day: 'Sáng',
            dayQuantityInWeek: 5,
            salary: 3000000,
            requestDescription: 'Dạy Toán cho học sinh lớp 1',
            phone: '0123456789',
            status: 'Chưa bàn giao'
        },
        {
            classId: 2,
            blockName: '2',
            subjectName: 'Hóa',
            day: 'Trưa',
            dayQuantityInWeek: 4,
            salary: 3500000,
            requestDescription: 'Ôn thi cấp 2 môn Hóa',
            phone: '0987654321',
            status: 'Chưa bàn giao'
        },
        {
            classId: 3,
            blockName: '3',
            subjectName: 'Tiếng Anh',
            day: 'Chiều',
            dayQuantityInWeek: 3,
            salary: 4000000,
            requestDescription: 'Dạy Tiếng Anh giao tiếp cho học sinh',
            phone: '0912345678',
            status: 'Chưa bàn giao'
        },
        {
            classId: 4,
            blockName: '1',
            subjectName: 'Ngữ Văn',
            day: 'Tối',
            dayQuantityInWeek: 6,
            salary: 2500000,
            requestDescription: 'Dạy Ngữ Văn học sinh lớp 6',
            phone: '0934567890',
            status: 'Đã bàn giao'
        },
        {
            classId: 5,
            blockName: '2',
            subjectName: 'Lý',
            day: 'Sáng',
            dayQuantityInWeek: 2,
            salary: 3200000,
            requestDescription: 'Dạy Lý cho học sinh lớp 10',
            phone: '0945678901',
            status: 'Đã bàn giao'
        },
        {
            classId: 6,
            blockName: '10',
            subjectName: 'Hóa',
            day: 'Tối',
            dayQuantityInWeek: 3,
            salary: 3000000,
            requestDescription: 'Dạy Hóa cho học sinh lớp 10',
            phone: '0328588985',
            status: 'Đã bàn giao'
        },
        {
            classId: 7,
            blockName: '11',
            subjectName: 'Toán',
            day: 'Chiều',
            dayQuantityInWeek: 2,
            salary: 3000000,
            requestDescription: 'Dạy Toán cho học sinh lớp 11',
            phone: '0328588985',
            status: 'Đã bàn giao'
        }
    ];

    useEffect(() => {
        // Thay thế dữ liệu từ API bằng dữ liệu mẫu
        setClassData(sampleClassData);
        setLoading(false);
    }, []);

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = classData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(classData.length / itemsPerPage);

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
    if (classData.length === 0) return <div className="error">Không có dữ liệu</div>;

    return (
        <div className="existing-class-container">
            <div className="existing-class-title">Thông Tin Lớp Học</div>
            <ul className="class-list">
                {currentItems.map((classItem) => (
                    <li key={classItem.classId} className="class-item">
                        <h3>ID Lớp: <strong>{classItem.classId}</strong></h3>
                        <p><strong>Khối:</strong> {classItem.blockName}</p>
                        <p><strong>Môn Học:</strong> {classItem.subjectName}</p>
                        <p><strong>Ngày:</strong> {classItem.day}</p>
                        <p><strong>Số lượng ngày trong tuần:</strong> {classItem.dayQuantityInWeek}</p>
                        <p><strong>Mức lương:</strong> {classItem.salary.toLocaleString()} VNĐ</p>
                        <p><strong>Mô tả yêu cầu:</strong> {classItem.requestDescription}</p>
                        <p><strong>Điện thoại:</strong> {classItem.phone}</p>
                        <p><strong>Trạng thái:</strong> {classItem.status}</p>
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

export default ExistingClass;