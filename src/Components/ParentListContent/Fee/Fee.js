import React from 'react';
import './Fee.css'; // Tạo file CSS riêng để định dạng

const Fee = () => {
  return (
    <div className="fee-container">
      <h1 className="fee-title">HỌC PHÍ THAM KHẢO</h1>
      <p>
        Trung tâm Gia Sư Biên Hòa xin gửi đến quý phụ huynh, học sinh bảng học phí tham khảo.
      </p>
      <p>
        Học phí thay đổi theo số môn học và yêu cầu cụ thể của phụ huynh. Để được tư vấn cụ thể, quý phụ huynh vui lòng liên hệ: <strong>0393687033</strong> để được tư vấn.
      </p>
      <p>
        Đối với các giáo viên đứng tuổi, giảng viên đại học nhiều năm kinh nghiệm đang công tác và giảng dạy tại các Trường Đại học, Trung tâm luyện thi có uy tín tại Biên Hòa thì học phí được tính theo tiết (45 phút) như sau:
      </p>
      <ul>
        <li>Cấp 1: 100.000 đ – 150.000 đ/ tiết</li>
        <li>Cấp 2: 150.000 đ – 200.000 đ/ tiết</li>
        <li>Cấp 3: 200.000 đ – 300.000 đ/ tiết</li>
      </ul>
      <p>
            Quí phụ huynh có nhu cầu cần tìm gia sư, xin liên hệ trực tiếp về <strong>TRUNG TÂM GIA SƯ BIÊN HOÀ</strong> – đảm bảo quý phụ huynh sẽ an tâm và hài lòng.
      </p>
      <p>
        Hotline: <strong>0393687033 (24/7)</strong>
      </p>
    </div>
  );
};

export default Fee;