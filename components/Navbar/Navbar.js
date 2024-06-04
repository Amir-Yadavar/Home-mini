import Link from "next/link";
import styles from "./../../styles/Navbar.module.css";
import { RiHome3Line } from "react-icons/ri";
import { useState } from "react";

function Navbar() {
  const [showNavMenu, setShowNavMenu] = useState(true);

  // showNavHandler

  const showNavHandler = () => {
    setShowNavMenu(!showNavMenu);
  };
  return (
    <>
      <header className={styles.NavbarSticky}>
        <div className="container-xl p-2 ">
          <div className="flexbetween">
            <div className="flexbetween">
              <div className="d-block d-md-none">
                {/* hamberger menu */}
                <div className={styles.iconHamMenu} onClick={showNavHandler}>
                  <span
                    className={
                      showNavMenu
                        ? `${styles.showham1}`
                        : `${styles.showclose1}`
                    }
                  ></span>
                  <span
                    className={
                      showNavMenu
                        ? `${styles.showham2}`
                        : `${styles.showclose2}`
                    }
                  ></span>
                  <span
                    className={
                      showNavMenu
                        ? `${styles.showham3}`
                        : `${styles.showclose3}`
                    }
                  ></span>
                </div>
              </div>

              {/* btn for sing up */}
              <div className="flexaround">
                <Link href={"/register"} className={`${styles.btnNav} ${styles.btnNavRed}`}>
                  ثبت نام
                </Link>
                <Link href={"/login"} className={styles.btnNav}>ورود</Link>
              </div>
            </div>

            {/* nav menu item */}
            <nav className="d-none d-md-flex flexaround">
              <Link href={"/homes"} className={styles.navItems}>
                <span className="p-3">جدید</span>
              </Link>
              <Link href={"/buy"} className={styles.navItems}>
                <span>خرید</span>
              </Link>
              <Link href={"/sell"} className={styles.navItems}>
                <span>فروش</span>
              </Link>
              <Link href={"/rent"} className={styles.navItems}>
                <span>اجاره</span>
              </Link>
              <Link href={"/connectUs"} className={styles.navItems}>
                <span>ارتباط با ما</span>
              </Link>
            </nav>


            {/* logo */}
            <Link href={"/"}>
              <div className="flexbetween">
                <div className={styles.titleLogo}>خونه مونه</div>
                <div className="logoNav">
                  <div className="logoWhite">
                    <RiHome3Line />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* nav item mobile */}

      <div>
        <div
          className={`${styles.navMobileContainer} ${!showNavMenu ? styles.shownavMobile : styles.closenavMobile
            }`}
        >
          <div className={styles.navMobile}>
            <Link href={"/homes"} className={styles.navItems}>
              <span className="p-3">جدید</span>
            </Link>
            <Link href="" className={styles.navItems}>
              <span className="p-3">خرید</span>
            </Link>
            <Link href={""} className={styles.navItems}>
              <span className="p-3">فروش</span>
            </Link>
            <Link href={""} className={styles.navItems}>
              <span className="p-3">اجاره</span>
            </Link>
            <Link href={"/connectUs"} className={styles.navItems}>
              <span className="p-3">ارتباط با ما</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
