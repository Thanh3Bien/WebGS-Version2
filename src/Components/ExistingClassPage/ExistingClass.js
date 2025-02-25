// src/ExistingClass.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ExistingClass.css';

const ExistingClass = () => {
    const [classData, setClassData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchClassData = async () => {
            try {
                const response = await axios.get('https://webgsapi.azurewebsites.net/api/Classes');
                setClassData(response.data); // Nếu response.data là một mảng, bạn có thể sử dụng [0] để lấy phần tử đầu tiên
            } catch (err) {
                setError('Có lỗi xảy ra khi tải dữ liệu');
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