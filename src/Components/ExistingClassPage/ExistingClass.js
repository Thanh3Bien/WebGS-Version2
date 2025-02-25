import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ExistingClass.css';

const ExistingClass = () => {
    const [classData, setClassData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchClassData = async () => {
            setLoading(true); // Đặt loading về true khi bắt đầu lấy dữ liệu
            try {
                const response = await axios.get('https://webgsapi.azurewebsites.net/api/Classes');
                
                // Kiểm tra nếu response.data là một mảng
                if (Array.isArray(response.data) && response.data.length > 0) {
                    setClassData(response.data[0]); // Lấy phần tử đầu tiên
                } else {
                    setError('Không có dữ liệu lớp học');
                }
            } catch (err) {
                // Ghi lại lỗi chi tiết trong console
                console.error('Error fetching class data:', err);
                
                // Cập nhật thông báo lỗi
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

    if (loading) return <div className="loading">Đang tải...</div>;
    if (error) return <div className="error">{error}</div>;

    // Kiểm tra nếu classData không phải là null
    if (!classData) return <div className="error">Không có dữ liệu</div>;

    return (
        <div className="existing-class-container">
            <div className="existing-class-title">Thông Tin Lớp Học</div>
            <ul className="class-list">
                <li key={classData.classId}>
                    <h2>Môn học ID: {classData.subjectId}</h2>
                    <p>Ngày học ID: {classData.studyDayId}</p>
                    <p>Số lượng ngày trong tuần: {classData.dayQuantityInWeek}</p>
                    <p>Mức lương: {classData.salary.toLocaleString()} VNĐ</p>
                    <p>Mô tả yêu cầu: {classData.requestDescription}</p>
                    <p>Điện thoại: {classData.phone}</p>
                    <p>Trạng thái: {classData.status}</p>
                </li>
            </ul>
        </div>
    );
};

export default ExistingClass;