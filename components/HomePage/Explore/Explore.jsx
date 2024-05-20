import React from "react";
import styles from "@/styles/Explore.module.css";
import { RiHome3Line } from "react-icons/ri";

function Explore() {
  return (
    <section className="p-2 my-3 ">
      <div className="container">
        <div className="row boxShadow">
          <div className="col-12 col-lg-6 p-0">
            <div className="d-flex flex-column justify-content-around align-items-center p-3 p-lg-5 h-100">
              <div className="flexbetween">
                <div className="logoNav mx-2">
                  <div className="logoWhite">
                    <RiHome3Line />
                  </div>
                </div>
                <div className={styles.titleLogo}>خونه مونه</div>
              </div>
              <p className={styles.paragExplore}>
                گزینه های وام مسکن خود را بررسی کنید
              </p>
              <p className={styles.paragExplore}>ما همیشه کنارتان هستیم</p>
              <p className={styles.paragExplore}>با خیال راحت خرید کنید</p>
              <button className={styles.btnExplore}>
                وام ها را مقایسه کنید
              </button>
            </div>
          </div>
          {/* figure */}
          <div className="col-12 col-lg-6 p-0">
            <figure className={styles.figureExplore}>
              <img
                src="./img/story-1.jpeg"
                alt="amir-yadavar"
                className="img-fluid"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
