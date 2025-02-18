import React, { useState } from 'react';
import axios from 'axios';

const ImageUploader = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState('');

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('file', image);
    formData.append('upload_preset', 'TutorWebCloudinary'); // Thay 'your_upload_preset' bằng giá trị thực tế

    try {
      const response = await axios.post(
        `https://api.cloudinary.com/v1_1/dsq0mei34/image/upload`, // Thay 'your_cloud_name' bằng tên cloud của bạn
        formData
      );
      setUrl(response.data.secure_url); // Lưu trữ URL của hình ảnh
    } catch (error) {
      console.error('Error uploading image: ', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload}>Tải lên</button>
      {url && <img src={url} alt="Uploaded" />}
    </div>
  );
};

export default ImageUploader;