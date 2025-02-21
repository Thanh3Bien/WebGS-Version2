import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <h1>Gia sư Biên Hòa - Trung tâm gia sư uy tín</h1>

      <h3>- Gia sư Biên Hòa có đạo đức, tác phong chuẩn mực:</h3>
      <ul>
        <li>+ Tiên học lễ, hậu học văn: Gia sư là người trực tiếp giảng dạy, truyền đạt kiến thức, kỹ năng trong cuộc sống cho học sinh.</li>
        <li>+ Gia sư tốt phải là người thầy tận tâm, có trách nhiệm.</li>
      </ul>

      <h3>- Gia sư giỏi phải có phương pháp giảng dạy phù hợp:</h3>
      <ul>
        <li>+ Học lực cũng như khả năng tiếp thu của mỗi học sinh là khác nhau. Không thể áp dụng một phương pháp cho nhiều đối tượng học sinh. Cần phải tổ chức kiểm tra phân loại học sinh về kiến thức, khả năng tiếp thu, khả năng ghi nhớ...</li>
        <li>+ Gia sư Biên Hòa luôn có giáo án giảng dạy riêng.</li>
      </ul>

      <h3 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>- Học thử miễn phí một tuần:</h3>
      <ul>
        <li>+ Trung tâm cam kết mang lại sự hài lòng cho học sinh, quý phụ huynh.</li>
        <li>+ Quý phụ huynh không phải trả phí cho một dịch vụ giảng dạy không chất lượng.</li>
      </ul>

      <h3>- Hỗ trợ trong suốt quá trình học tập:</h3>
      <p>
        Trung tâm luôn hỗ trợ song song cùng với gia sư trực tiếp giảng dạy. Hỗ trợ kiến thức chuyên môn, giáo án, phương pháp học tập.
      </p>

      <h3>- Dịch vụ dạy kèm tại nhà:</h3>
      <p>
        Nhiều năm trong lĩnh vực dạy kèm, Trung tâm gia sư Biên Hòa cam kết mang lại sự hài lòng cho phụ huynh, học sinh.
      </p>
      <ul>
        <li>+ Tổ chức thi, phân loại học sinh, phương pháp giảng dạy phù hợp.</li>
        <li>+ Luôn bám sát chương trình học ở trường, củng cố và nâng cao kiến thức.</li>
        <li>+ Rèn luyện các kỹ năng làm bài viết, bài thi trắc nghiệm...</li>
        <li>+ Gia sư Biên Hòa dạy kèm có giáo án dạy riêng, được hỗ trợ từ giáo án soạn sẵn của các thầy cô nhiều năm kinh nghiệm của trung tâm.</li>
      </ul>

      <h3>- Đội ngũ gia sư Tận tâm - Uy tín - Chất Lượng:</h3>
      <ul>
        <li>+ Giáo viên trực tiếp đứng lớp các trường học trên địa bàn thành phố Biên Hòa, Đồng Nai.</li>
        <li>+ Giảng viên trường đại học, cao đẳng.</li>
        <li>+ Sinh viên giỏi, có kinh nghiệm dạy kèm từ hai năm trở lên.</li>
        <li>+ Thường xuyên kiểm tra, báo kết quả học tập đến phụ huynh.</li>
        <li>+ Cam kết giúp học sinh tiến bộ trong một tháng.</li>
      </ul>

      <h3>- Gia sư Biên Hòa nhận dạy kèm:</h3>
      <ul>
        <li>+ Từ lớp 1 đến lớp 12, luyện thi lớp 9 lên 10, thi tốt nghiệp, đại học.</li>
        <li>+ Nhận dạy anh văn thiếu nhi, anh văn giao tiếp, tiếng Nga, tiếng Hàn,... luyện thi TOEIC.</li>
        <li>+ Nhận dạy tin học văn phòng, đồ họa.</li>
        <li>+ Nhận dạy các môn năng khiếu khác như vẽ, đàn nhạc...</li>
      </ul>

      <h4 className="contact-title">Quý phụ huynh cần tư vấn thêm, vui lòng liên hệ:</h4>
      <p className="contact-info">
        Trung tâm Gia sư Biên Hòa
      </p>
      <p className="contact-info">
        Điện thoại: 0393.687.033 (24/7)
      </p>
      <p className="contact-info">
        Website: <a href="http://giasutainang.edu.vn/">http://giasutainang.edu.vn/</a>
      </p>
    </div>
  );
};

export default Home;