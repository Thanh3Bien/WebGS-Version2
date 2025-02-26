import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './IntroduceMember.css';

const IntroduceMember = () => {
    const [tutorData, setTutorData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    useEffect(() => {
        const fetchTutorData = async () => {
            setLoading(true);
            try {
                const response = await axios.get('https://webgsapi.azurewebsites.net/api/Tutors'); // Thay đổi URL nếu cần
                if (Array.isArray(response.data) && response.data.length > 0) {
                    setTutorData(response.data);
                } else {
                    setError('Không có dữ liệu gia sư');
                }
            } catch (err) {
                console.error('Error fetching tutor data:', err);
                if (axios.isAxiosError(err)) {
                    setError(err.response?.data?.ErrorMessage || 'Có lỗi xảy ra khi tải dữ liệu');
                } else {
                    setError('Có lỗi xảy ra: ' + err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchTutorData();
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
                        {tutor.photo && <img src={tutor.photo} alt={tutor.tutorName} className="tutor-photo" />}
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