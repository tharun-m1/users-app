// import React, { useEffect } from "react";
import styles from "./otp.module.css";
import arrowLeft from "../../assets/arrowLeft.svg";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Loading from "../../components/Loading/Loading";
import { addUser } from "../../api/addUser";
function OTP() {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [countdown, setCountdown] = useState(15);
  const intervalId = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    intervalId.current = setInterval(() => {
      setCountdown((countdown) => countdown - 1);
    }, 1000);
    return () => clearInterval(intervalId.current);
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (countdown < 0) {
      clearInterval(intervalId.current);
      localStorage.removeItem("userAppData");
      return navigate("/");
    }
    // eslint-disable-next-line
  }, [countdown]);
  if (!localStorage.getItem("userAppData")) {
    return <Navigate to="/" />;
  }
  const formatUserId = () => {
    const user = localStorage.getItem("userAppData");
    if (/^\d{10}$/.test(user)) {
      return "******" + user.slice(-4);
    } else {
      const atIndex = user.indexOf("@");
      const username = user.slice(0, 2);
      const domain = user.slice(atIndex + 1);
      const maskedUsername = username + "****";
      return maskedUsername + "@" + domain;
    }
  };

  const handleChange = async (e) => {
    try {
      const { value } = e.target;
      if (value.length === 4 && value === "9999") {
        setOtp(value);
        setLoading(true);
        const userId = localStorage.getItem("userAppData");
        await addUser(userId);
        localStorage.removeItem("userAppData");
        setLoading(false);
        alert("User added");
        return navigate("/users");
      } else {
        if (value.length > 4) {
          return;
        } else {
          setOtp(value);
          if (value.length === 4 && value !== "9999") {
            setOtp("");
            return alert("Invalid OTP");
          }
        }
      }
    } catch (err) {
      setLoading(false);
      localStorage.removeItem("userAppData");
      if (err.status === 409) {
        alert("User already exists.");
        return navigate("/");
      } else {
        return alert("Something went wrong try again...");
      }
    }
  };
  return (
    <>
      <div className={styles.container}>
        {loading ? <Loading /> : ""}
        <div className={styles.wrapper}>
          <div className={styles.prev}>
            <img
              onClick={() => {
                localStorage.removeItem("userAppData");
                navigate("/");
              }}
              src={arrowLeft}
              alt="previous page"
            />
          </div>
          <div className={styles.caption}>Enter OTP</div>
          <div className={styles.text}>
            We have sent a one time password (OTP) to {formatUserId()}
          </div>
          <div className={styles.otpContainer}>
            <input
              value={otp}
              onChange={(e) => handleChange(e)}
              placeholder="OTP"
              type="text"
              name="otp"
            />
          </div>
          <div className={styles.timerContainer}>
            Resend OTP in 00:{countdown < 10 ? `0${countdown}` : countdown}
          </div>
        </div>
      </div>
    </>
  );
}

export default OTP;
