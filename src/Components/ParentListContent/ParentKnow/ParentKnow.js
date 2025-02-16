import React from 'react';
import './ParentKnow.css';
import img from "../../../assets/phuhuynhcanbiet.png";

const ParentKnow = () => {
  return (
    <div className="parent-know">
      <div className="parent-know-title-container">
        <div className="parent-know-title">PHỤ HUYNH CẦN BIẾT</div>
      </div>
      <img src={img} alt="Phu huynh can biet" className="parentknow-image" />
      {/* <header> */}
        <h2>Quý phụ huynh học sinh thân mến!</h2>
      {/* </header> */}

      <section>
        <p>
          Nhiều năm trong lĩnh vực dạy kèm và cũng là bậc cha mẹ. Nên chúng tôi luôn luôn thấu hiểu nổi trăn trở của quý phụ huynh. Làm sao để cho con chúng ta có một tương lai tươi sáng và thành đạt trong cuộc sống?
        </p>
        <p>
          Gia sư Tài Năng Biên Hòa thấu hiểu được nguyện vọng đó. Tuy nhiên để làm được điều đó, ngoài yếu tố các em chăm chỉ, học giỏi thì trong đó, khâu định hướng của phụ huynh học sinh để "ươm mầm tài năng"; xây dựng nền tảng cho con em từ bước ban đầu là rất quan trọng.
        </p>
      </section>

      <section>
        <h2>Về Trung Tâm</h2>
        <p>
          Chúng tôi luôn quan niệm sự thành bại và uy tín của trung tâm phụ thuộc vào vấn đề chất lượng giảng dạy của gia sư. Do đó trong khâu tuyển chọn, chúng tôi lựa chọn rất kỹ càng. Tất cả các gia sư trung tâm đều có kinh nghiệm nhiều năm đứng lớp; năng lực chuyên môn cũng như tác phong sư phạm và đạo đức tốt; đội ngũ giáo viên được tuyển chọn từ các trường Đại Học, cao đẳng… có tiếng trong thành phố Biên Hòa.
        </p>
        <p>
          Ngoài ra trước khi giới thiệu đến với gia đình, thầy cô, sinh viên đều được trung tâm phỏng vấn kỹ về chuyên môn cũng như tác phong, đạo đức nhà giáo.
        </p>
      </section>

      <section>
        <h2>Phương Châm</h2>
        <p>
          Gia sư Biên Hòa với phương châm Tận Tâm – Uy Tín – Chất Lượng. Gia sư Biên Hòa mang sứ mệnh giúp đỡ cho các em học sinh nhanh chóng tiến bộ trở thành tài năng nước nhà; tăng thu nhập cho các em sinh viên, thầy cô yêu thích giảng dạy.
        </p>
        <p>
          Chúng tôi luôn bám sát thực tế các bài giảng của giáo viên trên lớp. Cho các em thực hành ngay bài tập về nhà, củng cố kiến thức cũng như theo dõi sự tiến bộ của các em. Thường xuyên báo cáo kết quả học tập, trao đổi với phụ huynh cách hướng dẫn học sinh ôn bài và làm bài.
        </p>
      </section>

      <section>
        <h2>Học Thử Miễn Phí</h2>
        <p>
          Đến với Trung Tâm Gia Sư Biên Hòa, quý phụ huynh, học sinh được "HỌC THỬ MIỄN PHÍ 1 TUẦN" trước khi đăng ký học chính thức.
        </p>
        <p>
          Thưa quý phụ huynh học sinh thân mến! Gia sư "Tài Năng" cái tên nói lên tất cả. Chúng tôi cam kết giúp các em mau tiến bộ; khai thác đào tạo được thế mạnh cũng như lợi thế tiềm ẩn của các em để trở thành Tài Năng của nước nhà.
        </p>
        <p>
          Một lần nữa chúng tôi luôn tự hào với nhiều năm kinh nghiệm hoạt động trong vấn đề giảng dạy. Hơn 5000 phụ huynh đã chọn và 98% hài lòng. Chúng tôi xin khẳng định khi quyết định lựa chọn "Trung Tâm Gia Sư Tài Năng" Biên Hòa, phụ huynh có thể an tâm là một nơi uy tín, và là điểm đến lý tưởng để gởi gắm con em mình.
        </p>
      </section>

      <footer>
        <p>Đội Ngũ Trung Tâm Gia Sư Biên Hòa xin chúc gia đình Mạnh Khỏe – Hạnh Phúc – Thành Công trong cuộc sống.</p>
        <p>Mọi chi tiết quý phụ huynh, học sinh vui lòng liên hệ:</p>
        <p>Trung Tâm Gia Sư Biên Hòa</p>
        <p>Điện thoại: 0939.418.939</p>
        <p>Website: <a href="http://giasutainang.edu.vn/">http://giasutainang.edu.vn/</a></p>
        <p>Trân trọng cám ơn.</p>
      </footer>
    </div>
  );
};

export default ParentKnow;