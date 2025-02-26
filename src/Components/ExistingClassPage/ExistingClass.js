import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ExistingClass.css';

const ExistingClass = () => {
    const [classData, setClassData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    useEffect(() => {
        const fetchClassData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://webgsapi.azurewebsites.net/api/Classes');
                if (Array.isArray(response.data) && response.data.length > 0) {
                    setClassData(response.data);
                } else {
                    setError('Không có dữ liệu lớp học');
                }
            } catch (err) {
                console.error('Error fetching class data:', err);
                if (axios.isAxiosError(err)) {
                    setError(err.response?.data?.ErrorMessage || 'Có lỗi xảy ra khi tải dữ liệu');
                } else {
                    setError('Có lỗi xảy ra: ' + err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchClassData();
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