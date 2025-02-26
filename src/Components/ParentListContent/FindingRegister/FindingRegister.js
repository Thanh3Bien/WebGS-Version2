import React, { useRef, useState } from "react";
import styles from "./FindingRegister.css";
// import Header from "../../Header/Header";
import emailjs from "@emailjs/browser";
// import Zalo from "../../Components/ZaloSupport/Zalo";

export default function Register({ showHeader = true }) {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState(""); // Trạng thái cho thông báo

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ozdlpn",
        "template_e31o7ld",
        form.current,
        "sRe_wqnmfOrvSIi0Q"
      )
      .then(
        () => {
          setSuccessMessage("Gửi biểu mẫu thành công!"); // Cập nhật thông báo thành công
          form.current.reset(); // Làm mới các ô nhập liệu
        },
        (error) => {
          console.error("FAILED...", error);
          setSuccessMessage("Gửi biểu mẫu thất bại. Vui lòng thử lại."); // Thông báo lỗi
        }
      );
  };

  return (
    <>
      {/* {showHeader && <Header />} */}
      <div className={`${styles.containers}`}>
        <form
          className="rounded-lg p-8 max-w-lg mx-auto"
          onSubmit={sendEmail}
          ref={form}
        >
          <h2 className="text-2xl font-bold text-left mb-6 text-[#333] -mt-4">
            Form Đăng Kí Học Gia Sư Cho Học Sinh
          </h2>

          {/* Thông tin học sinh */}
          <h3 className="text-xl font-semibold mb-4">Thông tin học sinh</h3>

          {/* Tên học sinh */}
          <div className="mb-4 flex items-center">
            <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
              Tên học sinh:
            </label>
            <input
              type="text"
              required
              name="student_name"
              className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Giới tính */}
          <div className="mb-4 flex items-center">
            <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
              Giới tính:
            </label>
            
              <label className="mr-4 cursor-pointer">
                <input type="radio" name="gender" value="male" 
                // required 
                /> Nam
              </label>
              <label className="cursor-pointer">
                <input type="radio" name="gender" value="female" 
                //required 
                /> Nữ
              </label>
            
          </div>

          {/* Trường */}
          <div className="mb-4 flex items-center">
            <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
              Trường:
            </label>
            <input
              type="text"
              // required
              name="school"
              className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Lớp */}
          <div className="mb-4 flex items-center">
            <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
              Lớp:
            </label>
            <input
              type="number"
              min="1"
              max="12"
              required
              name="grade"
              className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Đăng ký môn */}
          <div className="mb-4 flex items-center">
            <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
              Đăng ký môn:
            </label>
            <input
              type="text"
              // required
              name="subject"
              className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Thời gian dạy */}
          <div className="mb-4 flex items-center">
            <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
              Thời gian dạy:
            </label>
            <input
              type="text"
              // required
              name="teaching_time"
              className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Số buổi dạy */}
          <div className="mb-4 flex items-center">
            <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
              Số buổi dạy:
            </label>
            <input
              type="number"
              // required
              name="number_of_classes"
              className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Yêu cầu */}
          <div className="mb-4 flex items-center">
            <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
              Yêu cầu:
            </label>
            
              <label className="mr-4 cursor-pointer">
                <input type="checkbox" name="teacher_type" value="teacher" /> Giáo viên
              </label>
              <label className="cursor-pointer">
                <input type="checkbox" name="teacher_type" value="student" /> Sinh viên
              </label>
            
          </div>

          {/* Yêu cầu khác */}
          <div className="mb-4 flex items-center">
            <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
              Yêu cầu khác:
            </label>
            <textarea
              name="additional_requirements"
              className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Thông tin liên hệ */}
          <h3 className="text-xl font-semibold mb-4">Thông tin liên hệ</h3>

          {/* Địa chỉ */}
          <div className="mb-4 flex items-center">
            <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
              Địa chỉ:
            </label>
            <input
              type="text"
              required
              name="address"
              className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Điện thoại */}
          <div className="mb-4 flex items-center">
            <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
              Điện thoại:
            </label>
            <input
              type="tel"
              pattern="[0-9]{10,12}"
              placeholder="Lưu ý: Phụ huynh điền đúng số điện thoại"
              required
              name="phone_number"
              className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div className="mb-4">
            <button
              className={`${styles.buttonText} bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition`}
              type="submit"
            >
              Đăng ký
            </button>
            {successMessage && (
              <p className="mb-4 text-green-600 font-bold">{successMessage}</p>
            )}
          </div>
        </form>
      </div>
      {/* <Zalo/> */}
    </>
  );
}