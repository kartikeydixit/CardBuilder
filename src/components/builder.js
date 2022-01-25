import React, { useState } from "react";
import style from "./builderStyles.module.css";
import profile_placeholder from "./../asset/profile-pic.png";
const Builder = () => {
  const [value, setValue] = useState({
    fullname: "",
    email: "",
    contact: "",
    company: "",
    photo: null,
  });
  const { fullname, email, contact, company, photo } = value;
  const handleChange = (event) => {
    setValue({
      ...value,
      [event.target.name]: event.target.value,
    });
  };
  return (
    <div className={style.container}>
      <div className={style.box}>
        <div className={`${style.content} ${style.one}`}>
          <div className={style.imgdiv}></div>

          <div className={style.detaildiv}>
            <div>
              <p>
                <b>{fullname}</b>
              </p>
            </div>
            <div>
              <p>
                <span className={style.icons}>
                  <i class="fas fa-briefcase"></i>
                </span>
                <b>{company}</b>
              </p>
            </div>
            <div>
              <p>
                <span className={style.icons}>
                  <i class="fas fa-phone"></i>
                </span>
                <b>{contact}</b>
              </p>
            </div>
            <div>
              <p>
                <span className={style.icons}>
                  <i class="fas fa-envelope"></i>
                </span>
                <b>{email}</b>
              </p>
            </div>
          </div>
        </div>

        <div className={`${style.content} ${style.two}`}>
          <form>
            <input
              placeholder="Full Name"
              value={fullname}
              name="fullname"
              onChange={handleChange}
            />
            <input
              placeholder="Company Name"
              value={company}
              name="company"
              onChange={handleChange}
            />
            <input
              placeholder="Contact Number"
              value={contact}
              name="contact"
              onChange={handleChange}
            />
            <input
              placeholder="Email Address"
              value={email}
              name="email"
              onChange={handleChange}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Builder;
