import React, { useState } from "react";
import styles from "./../../../styles/HeaderHome.module.css";
import { FaSlidersH } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

function Header() {
  const [buyBtnStyle, setbuyBtnStyle] = useState(true);
  const [sellBtnStyle, setsellBtnStyle] = useState(true);
  const [rentBtnStyle, setrentBtnStyle] = useState(true);
  const [addressBtnStyle, setaddressBtnStyle] = useState(true);

  const buyBtnHandler = () => {};

  const sellBtnHandler = () => {};

  const rentBtnHandler = () => {};

  const addressBtnHandler = () => {};
  if (process.browser) {
    let btnTitle = document.querySelectorAll(
      ".HeaderHome_BtnHeaderHome__BChkP "
    );
    btnTitle.forEach((btn) => {
      btn.addEventListener("click", () => {
        btnTitle.forEach((btn) => {
          btn.style.borderBottom = "none";
        });
        btn.style.borderBottom = "1px solid #e4002b";
      });
    });
  }

  return (
    <section className={styles.containerHeader}>
      <div className={styles.contentHeader}>
        {/* btn header */}
        <div className="flexaround border-bottom border-secondary">
          {/* <button
            className={
              buyBtnStyle
                ? `${styles.BtnHeaderHome} ${styles.clickedBtn}`
                : `${styles.BtnHeaderHome}`
            }
            onClick={buyBtnHandler}
          >
            خرید
          </button> */}
          <button
            className={`${styles.BtnHeaderHome} `}
            onClick={buyBtnHandler}
          >
            خرید
          </button>
          <button
            className={`${styles.BtnHeaderHome} `}
            onClick={sellBtnHandler}
          >
            فروش
          </button>
          <button
            className={`${styles.BtnHeaderHome} `}
            onClick={rentBtnHandler}
          >
            اجاره
          </button>
          <button
            className={`${styles.BtnHeaderHome} `}
            onClick={addressBtnHandler}
          >
            آدرس
          </button>
        </div>

        {/* input header */}
        <div className="flexbetween py-2">
          <button className={styles.BtnHeaderHomeSearch}>جستجو</button>
          <button className={styles.BtnHeaderHomeFilter}>
            فیلتر
            <span className="px-2">
              <FaSlidersH />
            </span>
          </button>
          <div className="flexbetween">
            <span className={styles.fontAwsomeSearch}>
              <CiSearch />
            </span>
            <input
              type="text"
              placeholder="جستجو خیابان ، محله ..."
              className={styles.inputSearchHeader}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
