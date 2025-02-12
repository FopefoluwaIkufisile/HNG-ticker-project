import React, { useState, useEffect } from "react";
import Upload from "/public/Upload.svg";

const AttendeeDetails = ({ setStep }) => {
  const [imageURL, setImageURL] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    imageURL: "",
    about: "",
  });
  const [loading, setLoading] = useState(false);

  // Load saved data from localStorage on page load
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("attendeeDetails"));
    if (savedData) {
      setFormData(savedData);
      setImageURL(savedData.imageURL || null);
    }
  }, []);

  // Save form data to localStorage
  useEffect(() => {
    if (formData.name && formData.email && formData.about) {
      localStorage.setItem("attendeeDetails", JSON.stringify({ ...formData, imageURL }));
    }
  }, [formData, imageURL]);

  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    setLoading(true); // Show loading state

    const imageData = new FormData();
    imageData.append("file", file);
    imageData.append("upload_preset", "My-Uploads"); // Change to your Cloudinary preset

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/dvvoaudh1/image/upload",
        {
          method: "POST",
          body: imageData,
        }
      );
      const data = await response.json();
      setImageURL(data.secure_url); // Save Cloudinary image URL
    } catch (error) {
      console.error("Upload error:", error);
    }

    setLoading(false); // Hide loading state
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form fields
    let valid = true;
    const newErrors = { name: "", email: "", imageURL: "", about: "" };

    if (!formData.name) {
      newErrors.name = "Name is required!";
      valid = false;
    }
    if (!formData.email) {
      newErrors.email = "Email is required!";
      valid = false;
    }
    if (!imageURL) {
      newErrors.imageURL = "Profile photo is required!";
      valid = false;
    }
    if (!formData.about) {
      newErrors.about = "Please provide details about the project!";
      valid = false;
    }

    if (!valid) {
      setErrors(newErrors);
      return;
    }

    // Log user data when validation passes

    // Proceed to next step if valid
    setStep(3);
  };

  return (
    <form onSubmit={handleSubmit} className="attendee-details">
      <div className="header">
        <div className="header-nav-attendee">
          <p className="ticket">Attendee Details</p>
          <p className="step">Step 2 / 3</p>
        </div>
        <div className="progress">
          <div className="progress-bar-attendee"></div>
        </div>
      </div>
      <div className="content">
        <div className="upload-profile">
          <label htmlFor="profile-photo">Upload Profile Photo</label>
          <div className="upload-box" onClick={() => document.getElementById("fileInput").click()}>
            <div className="drop-image">
              {imageURL ? (
                <img src={imageURL} alt="Preview" className="drop-img-preview" />
              ) : (
                <>
                  <img src={Upload} alt="Upload Icon" className="drop-img" />
                  <p className="drag">{loading ? "Uploading..." : "Drag & drop or click to upload"}</p>
                </>
              )}
            </div>
          </div>
          <input type="file" id="fileInput" accept="image/*" style={{ display: "none" }} onChange={handleImageChange} />
          {errors.imageURL && <p className="error-message">{errors.imageURL}</p>}
        </div>
        <div className="kyc-box">
          <div className="name">
            <label htmlFor="name">Enter Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="input-text"
            />
            {errors.name && <p className="error-message">{errors.name}</p>}
          </div>
          <div className="email">
            <label htmlFor="email">Enter Your Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="input-text"
              placeholder="hello@avioflagos.io"
            />
            {errors.email && <p className="error-message">{errors.email}</p>}
          </div>
          <div className="about">
            <label htmlFor="about">About the Project</label>
            <textarea
              name="about"
              className="text-area-text"
              placeholder="Tell us about your project"
              value={formData.about}
              onChange={handleInputChange}
            />
            {errors.about && <p className="error-message">{errors.about}</p>}
          </div>
          </div>
        <div className="nav-buttons-upload">
          <button type="button" className="back" onClick={() => setStep(1)}>Back</button>
          <button type="submit" className="get">Get my free ticket</button>
        </div>
      </div>
    </form>
  );
};

export default AttendeeDetails;