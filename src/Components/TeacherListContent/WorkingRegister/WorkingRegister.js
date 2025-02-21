import React, { useRef, useState } from "react";
import styles from "./WorkingRegister.css" // Sử dụng CSS đã có
import emailjs from "@emailjs/browser"; // Thư viện gửi email

export default function WorkingRegister() {
  const form = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0ozdlpn",
        "template_a23kdg6",
        form.current,
        "sRe_wqnmfOrvSIi0Q"
      )
      .then(
        () => {
          setSuccessMessage("Gửi biểu mẫu thành công!");
          form.current.reset();
        },
        (error) => {
          console.error("FAILED...", error);
          setSuccessMessage("Gửi biểu mẫu thất bại. Vui lòng thử lại.");
        }
      );
  };

  return (
    <div className={`${styles.containers}`}>
      <form
        className="rounded-lg p-8 max-w-lg mx-auto"
        onSubmit={sendEmail}
        ref={form}
      >
        <h1 className="text-2xl font-bold text-left mb-6 text-[#333] -mt-4">
          Đăng Ký Làm Gia Sư
        </h1>

        {/* Thông tin cá nhân */}
        <h3 className="text-xl font-semibold mb-4">Thông tin cá nhân</h3>

        {/* Họ và tên */}
        <div className="mb-4 flex items-center">
          <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
            Họ và tên:
          </label>
          <input
            type="text"
            required
            name="full_name"
            className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Năm sinh */}
        <div className="mb-4 flex items-center">
          <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
            Năm sinh:
          </label>
          <input
            type="number"
            required
            name="birth_year"
            min="1900"
            max={new Date().getFullYear()}
            className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* CMND */}
        <div className="mb-4 flex items-center">
          <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
            CMND:
          </label>
          <input
            type="text"
            required
            name="id_card"
            className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

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
            placeholder="Lưu ý: Điền đúng số điện thoại"
            required
            name="phone_number"
            className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Thông tin học vấn */}
        <h3 className="text-xl font-semibold mb-4">Thông tin học vấn</h3>

        {/* Trình độ */}
        <div className="mb-4 flex items-center">
          <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
            Trình độ:
          </label>
          <select
            name="education_level"
            required
            className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          >
            <option value="">Chọn trình độ</option>
            <option value="Cao đẳng">Cao đẳng</option>
            <option value="Đại học">Đại học</option>
            <option value="Thạc sĩ">Thạc sĩ</option>
          </select>
        </div>

        {/* Học trường */}
        <div className="mb-4 flex items-center">
          <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
            Học trường:
          </label>
          <input
            type="text"
            required
            name="school"
            className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Chuyên ngành */}
        <div className="mb-4 flex items-center">
          <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
            Chuyên ngành:
          </label>
          <input
            type="text"
            required
            name="major"
            className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Năm tốt nghiệp */}
        <div className="mb-4 flex items-center">
          <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
            Năm tốt nghiệp:
          </label>
          <input
            type="number"
            required
            name="graduation_year"
            min="1900"
            max={new Date().getFullYear()}
            className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Hiện là */}
        <div className="mb-4 flex items-center">
          <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
            Hiện là:
          </label>
          <label className="mr-4 cursor-pointer">
            <input type="radio" name="current_status" value="teacher" required /> Giáo viên
          </label>
          <label className="cursor-pointer">
            <input type="radio" name="current_status" value="student" required /> Sinh viên
          </label>
          <label className="cursor-pointer">
            <input type="radio" name="current_status" value="graduate" required /> Đã tốt nghiệp
          </label>
        </div>

        {/* Đơn vị công tác */}
        <div className="mb-4 flex items-center">
          <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
            Đơn vị công tác:
          </label>
          <input
            type="text"
            name="workplace"
            className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Thông tin lớp nhận dạy */}
        <h3 className="text-xl font-semibold mb-4">Thông tin lớp nhận dạy</h3>

        {/* Các lớp dạy được */}
        <div className="mb-4 flex items-center">
          <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
            Các lớp dạy được:
          </label>
          <input
            type="text"
            required
            name="teaching_classes"
            className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Các môn dạy được */}
        <div className="mb-4 flex items-center">
          <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
            Các môn dạy được:
          </label>
          <input
            type="text"
            required
            name="teaching_subjects"
            className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Khu vực */}
        <div className="mb-4 flex items-center">
          <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
            Khu vực:
          </label>
          <input
            type="text"
            required
            name="area"
            className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Thời gian dạy được */}
        <div className="mb-4 flex items-center">
          <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
            Thời gian dạy được:
          </label>
          <input
            type="text"
            required
            name="available_time"
            className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Mức lương yêu cầu/buổi */}
        <div className="mb-4 flex items-center">
          <label className="block font-medium text-gray-700 mb-2 mr-4" style={{ width: '150px' }}>
            Mức lương yêu cầu/buổi:
          </label>
          <input
            type="number"
            required
            name="salary_per_class"
            className="w-full text-[#212121] bg-[#fafafa] border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
          />
        </div>

        {/* Dòng chốt */}
        <p className="mt-4 text-gray-600">
          Xin cung cấp đầy đủ thông tin để tiện liên lạc.
        </p>

        {/* Nút Đăng ký */}
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
  );
}