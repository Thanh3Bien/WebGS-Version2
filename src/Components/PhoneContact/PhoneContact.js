import React from "react";
import './PhoneContact.css';

const phoneIcon = "https://res.cloudinary.com/dsq0mei34/image/upload/v1740593281/phoneIconNoBackG_pntxra.png"; // Thay thế bằng link ảnh icon điện thoại của bạn

export default function PhoneContact() {
//   const [isMobile, setIsMobile] = useState(false);

  const handleClick = () => {
    window.location.href = "tel:0393687033"; // Số điện thoại bạn muốn liên hệ
  };

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < 769);
//     };

//     window.addEventListener('resize', handleResize);
//     handleResize(); // Gọi hàm ngay khi component được mount

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   if (!isMobile && !showInFooter) {
//     return null; // Không hiển thị nếu không phải thiết bị di động và không ở footer
//   }

  return (
    <div className="phone-contact">
      <div className="phone-icon shake" onClick={handleClick}>
        <img src={phoneIcon} alt="Phone Contact" className="phone-image" />
        {/* <span className="phone-text">Liên Hệ Ngay</span> */}
      </div>
    </div>
  );
}