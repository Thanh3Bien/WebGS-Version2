import React from 'react';
import './AdmissionRule.css'; // Tạo file CSS riêng để định dạng

const AdmissionRule = () => {
  return (
    <div className="rule-container">
      <div className="rule-title">NỘI QUY NHẬN LỚP</div>
      <p>
        Gia sư Tài Năng – VP. Gia Sư Biên Hòa
      </p>
      <ul>
        <li><b>Gia sư chọn lớp dạy tại địa chỉ web:</b> <a href="http://giasutainang.edu.vn/lop-day-hien-co/">Okfine</a></li>
        <li>
          Gia sư trước khi nhận lớp cần phải nghiên cứu kỹ:
          <ul>
            <li>Thời gian</li>
            <li>Đường đi (khoảng cách từ nhà đến nơi dạy)</li>
            <li>Năng lực giảng dạy (trung tâm sẽ phỏng vấn)</li>
          </ul>
        </li>
        <li><b>Các giấy tờ cần thiết để nhận lớp:</b>
          <ul>
            <li>Thẻ giáo viên hoặc thẻ sinh viên</li>
            <li>Chứng minh nhân dân</li>
            <li>Các bằng cấp, chứng chỉ liên quan (yêu cầu cụ thể từng lớp, nếu có)</li>
          </ul>
          
        </li>
        <li><b>Tác phong và đạo đức: có đạo đức, tác phong nhà giáo nghiêm túc.</b></li>
        <li>Trung tâm sắp xếp và hẹn phụ huynh, gia sư phải đến đúng giờ theo thỏa thuận.</li>
        <li>
          Khi đến nhận lớp, nếu có bất kỳ trở ngại nào (không gặp được phụ huynh, thời gian học bị thay đổi...), gia sư phải báo cho trung tâm ngay khi rời khỏi nhà phụ huynh để trung tâm kịp thời xác minh và giải quyết.
        </li>
        <li><b style={{ fontSize: '18px' }}>
          Trung tâm sẽ chịu trách nhiệm trong vòng 30 ngày,</b> nếu có bất kỳ sự cố khách quan nào từ phía phụ huynh sau khi đã xác minh, trung tâm sẽ hoàn phí 100% cho gia sư.
          <ul>
            <li>Thời gian giải quyết trong là 24 tiếng, sau 30 ngày trung tâm không còn trách nhiệm giải quyết.</li>
            <li>Khi đến nhận lại phí, gia sư cần mang theo thẻ sinh viên, giáo viên để đối chiếu mới được nhận lại phí.</li>
          </ul>
        </li>
        <li><b style={{ fontSize: '18px' }}>
          Trung tâm sẽ hoàn lại 100% phí hoặc đổi lớp khác nếu gia sư không nhận được lớp do lỗi phía phụ huynh.</b>
        </li>
        <li>
          Gia sư không được tự ý bỏ lớp, tăng học phí, giảm giờ dạy, tự ý thay đổi người dạy, cố ý làm mất lớp... Trung tâm sẽ không hoàn lại phí.
        </li>
        <li>Các trường hợp đặc biệt:
          <ul>
            <li>Gia sư có sổ hộ nghèo, giấy chứng nhận hoàn cảnh khó khăn: Miễn phí 100%</li>
            <li>Gia sư muốn nhận lớp, dạy... rồi mới nộp phí: Gia sư có thể để lại giấy tờ tùy thân.</li>
          </ul>
        </li>
      </ul>
      <p>
        Trung tâm luôn lắng nghe và chia sẻ, cam kết mang lại sự hài lòng cho quý phụ huynh học sinh, cũng như sự tin tưởng từ phía giáo viên, sinh viên.
      </p>
      <footer>
        <p>&copy; Gia sư Tài Năng Biên Hòa - Tất cả quyền lợi được bảo lưu.</p>
      </footer>
    </div>
  );
};

export default AdmissionRule;