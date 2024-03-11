import React, { useState } from "react";
import styles from "./home.module.css";
import arrowRight from "../../assets/arrowRight.svg";
import google from "../../assets/google.svg";
import whatsApp from "../../assets/whatsApp.svg";

import { useNavigate } from "react-router-dom";
function Home() {
  const [userId, setUserId] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { value } = e.target;
    setUserId(value);
  };
  const handleSubmit = () => {
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (phoneRegex.test(userId) || emailRegex.test(userId)) {
      return navigate("/otp");
    } else {
      return alert("Enter valid Mobile/Email");
    }
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.caption}>Get Started</div>
          <div className={styles.inputContainer}>
            <input
              onChange={(e) => handleChange(e)}
              placeholder="Mobile / Email"
              required
              type="email"
              name="email"
            />
          </div>
          <div className={styles.btnContainer}>
            <button onClick={handleSubmit}>
              <div>Continue</div>
              <div className={styles.imgContainer}>
                <img src={arrowRight} alt="arrow" />
              </div>
            </button>
          </div>
          <div
            style={{
              color: "gray",
              marginTop: "2vh",
            }}
          >
            Or continue with
          </div>
          <div className={styles.options}>
            <div>
              <div>
                <img src={whatsApp} alt="whatsApp" />
              </div>
              <div>WhatsApp</div>
            </div>
            <div>
              {" "}
              <div>
                <img src={google} alt="google" />
              </div>{" "}
              <div>Google</div>
            </div>
          </div>
          <div className={styles.tnc}>
            By continuing you agree to our <span>terms</span> and{" "}
            <span>policies.</span>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
