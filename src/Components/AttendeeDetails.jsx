import React from "react";
import Upload from "/public/Upload.svg";

const AttendeeDetails = () => {
  return (
    <form action={""} className="attendee-details">
      <div className="header">
        <div className="header-nav">
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
          <div
            className="upload-box"
            id="uploadBox"
            onclick="document.getElementById('fileInput').click();"
          >
            <div className="drop-image">
              <img src={Upload} alt="" className="drop-img" />
              <p className="drag">Drag & drop or click to upload</p>
            </div>
            <img id="previewImg" />
          </div>
          <input
            type="file"
            id="fileInput"
            accept="image/*"
            onchange="previewImage(event)"
          />
        </div>
        <div className="progress"></div>
        <div className="kyc-box">
          <div className="name">
            <label htmlFor="fullname">Enter Your Name</label>
            <input type="text" name="" id="" className="input-text" />
          </div>
          <div className="email">
            <label htmlFor="fullname">Enter Your Email *</label>
            <input type="text" name="" id="" className="input-text"  placeholder="hello@avioflagos.io"/>
          </div>
          <div className="about">
            <label htmlFor="fullname">About the Project</label>
            <textarea name="Textarea" className="text-area-text" placeholder="Textarea"></textarea>
          </div>
        </div>
        <div className="nav-buttons-upload">
          <button className="back">Back</button>
          <button className="get">Get my free ticket</button>
        </div>
      </div>
    </form>
  );
};

export default AttendeeDetails;
