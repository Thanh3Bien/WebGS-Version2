import React, { useEffect, useState } from 'react';
import './Zalo.css';

const zaloIcon = "https://res.cloudinary.com/dsq0mei34/image/upload/v1739893797/zaloNoBackGround_ecspvy.png";

export default function Zalo({ showInFooter }) {

const [isMobile, setIsMobile] = useState(false);
  const handleClick = () => {
    window.location.href = "https://zalo.me/0393687033";
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Gọi hàm ngay khi component được mount

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (!isMobile && !showInFooter) {
    return null; // Không hiển thị nếu không phải thiết bị di động và không ở footer
  }


  return (
    <div className="zalo-support">
      <div className="zalo-icon shake" onClick={handleClick}>
        <img src={zaloIcon} alt="Zalo Support" className="zalo-image" />
        {/* <span className="zalo-text">Hỗ Trợ Ngay</span> */}
      </div>
    </div>
  );
}