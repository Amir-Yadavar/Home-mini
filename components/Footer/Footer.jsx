import React from "react";
import styles from "@/styles/Footer.module.css";
import Link from "next/link";
import { RiHome3Line } from "react-icons/ri";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-around  py-2">
          <div className="d-flex align-items-center mx-1">
            <span className="spanInfoColor">تلفن : </span>
            <span className="spanInfo">۰۲۱-۱۲۱۲۱۳۱۱</span>
          </div>
          <div className="d-flex align-items-center mx-1">
            <span className="spanInfoColor">همراه : </span>
            <span className="spanInfo">۰۹۱۹-۸۱۱۸۵۷۳</span>
          </div>
          <div className="d-flex align-items-center mx-1">
            <span className="spanInfoColor">ایمیل : </span>
            <span className="spanInfo">amiresya@gmail.com</span>
          </div>
        </div>

        <p className={styles.address}>
          آدرس : تهران سعادت آباد ، سرو غربی ، خیابان اول ،کوچه دوم ، ساختمان
          آرمان
        </p>

        <div className="d-flex align-items-center">
          <span className="spanInfoColor">لینک های مفید :</span>
          {/* nav menu item */}
          <nav className="flexaround">
            <Link href="/homes" className={styles.navItems}>
              <span className="p-3">جدید</span>
            </Link>
            <Link href="" className={styles.navItems}>
              <span>خرید</span>
            </Link>
            <Link href={""} className={styles.navItems}>
              <span>فروش</span>
            </Link>
            <Link href={""} className={styles.navItems}>
              <span>اجاره</span>
            </Link>
            <Link href={""} className={styles.navItems}>
              <span>ارتباط با ما</span>
            </Link>
          </nav>
        </div>

        <div className="d-flex flex-column flex-md-row align-items-md-center py-3">
          <div className="flexbetween px-2 m-1">
            <div className="logoNav">
              <div className="logoWhite">
                <RiHome3Line />
              </div>
            </div>
            <div className={styles.titleLogo}>خونه مونه</div>
          </div>
          <div className="flexbetween px-2 m-1">
            <div className="logoNavFooter logoColorBlue">
              <div className="logoWhite">
                <RiHome3Line />
              </div>
            </div>
            <div className={styles.titleLogo}>همراهان روشن</div>
          </div>
          <div className="flexbetween px-2 m-1">
            <div className="logoNavFooter logoColorGreen">
              <div className="logoWhite">
                <RiHome3Line />
              </div>
            </div>
            <div className={styles.titleLogo}>شرکت نرم افزاری هوم</div>
          </div>
          <div className="flexbetween px-2 m-1">
            <div className="logoNavFooter logoColorBrown">
              <div className="logoWhite">
                <RiHome3Line />
              </div>
            </div>
            <div className={styles.titleLogo}>استارت آپ کاشانه</div>
          </div>
        </div>

        <p className={styles.copyRight}>
          کلیه حقوق این سایت برای خونه مونه محفوظ می‌باشد . CopyRight © 2024
          Khonemone Inc
        </p>
      </div>
    </footer>
  );
}

export default Footer;
