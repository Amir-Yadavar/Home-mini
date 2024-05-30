import React from "react";
import styles from "@/styles/BoxRegister.module.css";
import { RiHome3Line } from "react-icons/ri";
import { FaApple, FaFacebook, FaGoogle } from "react-icons/fa";
import Link from "next/link";

function BoxRegister(props) {
  return (
    <div className={styles.container}>
      <div className={styles.containerLogo}>
        <div className="flexbetween px-2 m-1">
          <div className="logoNav">
            <div className="logoWhite">
              <RiHome3Line />
            </div>
          </div>
          <div className={styles.titleLogo}>خونه مونه</div>
        </div>
      </div>

      <h2 className={styles.title}>{props.title}</h2>
      <p className={styles.text}>برای {props.title} ایمیل خود را وارد کنید</p>

      <form className="d-flex flex-column my-3">
        <label htmlFor="" className={styles.label}>ایمیل :</label>
        <input type="email" autoComplete="off" placeholder="ایمیل" className={styles.input}/>
        <input type="submit" value={"ورود"} className={styles.submit} />
      </form>

      <div className="d-flex align-items-center">
        <span className={styles.text}>{props.question}</span>
        <Link href={props.url} className={styles.textRed}>{props.answer}</Link>
      </div>

      <span className={styles.text}>یا</span>

      <div className="d-flex flex-column align-items-center">
        <div className={styles.btnSocial}>
          <span><FaGoogle /></span>
          <span>ورود با گوگل </span>
        </div>
        <div className={styles.btnSocial}>
          <span><FaFacebook /></span>
          <span>ورود با فیسبوک </span>
        </div>
        <div className={styles.btnSocial}>
          <span><FaApple /></span>
          <span>ورود با اپل </span>
        </div>
      </div>
    </div>
  );
}

export default BoxRegister;
