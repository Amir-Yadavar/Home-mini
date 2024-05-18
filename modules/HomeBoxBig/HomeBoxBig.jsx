import React, { useState } from "react";
import styles from "@/styles/HomeBoxBig.module.css";
// icons
import { RiHome3Line } from "react-icons/ri";
import { GoStarFill } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { FaBed } from "react-icons/fa";
import { IoMdResize } from "react-icons/io";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function HomeBoxBig() {
  const [isIconCheck, setIsIconCheck] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className="d-flex align-items-center position-relative">
          <span className={styles.containerImg}>
            <figure className={styles.figure}>
              <img
                src="./img/amir-yadavar.jpg"
                alt="amir-yadavar"
                className="img-fluid"
              />
            </figure>
          </span>

          <h3 className={styles.titleName}>Amir Yadavar</h3>
        </div>

        <div className="flexbetween">
          <div className={styles.titleLogo}>خونه مونه</div>
          <div className="logoNav">
            <div className="logoWhite">
              <RiHome3Line />
            </div>
          </div>
        </div>
      </div>

      {/* swiper */}
      <div className="">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className={styles.swiperSlide}>
            <figure>
              <img src="./img/gal-1.jpeg" alt="" className="img-fluid" />
            </figure>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <figure>
              <img src="./img/gal-2.jpeg" alt="" className="img-fluid" />
            </figure>
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <figure>
              <img src="./img/gal-3.jpeg" alt="" className="img-fluid" />
            </figure>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* title */}

      <div className="flexbetween p-4 pb-0">
        <h2 className="titleSection">خانه ویلایی</h2>

        <span onClick={() => setIsIconCheck(!isIconCheck)}>
          <GoStarFill
            className={
              !isIconCheck ? `${styles.iconStar}` : `${styles.iconStarGold}`
            }
          />
        </span>
      </div>

      {/* price */}
      <div className="d-flex justify-content-end align-items-center px-4 mb-2">
        <span className={styles.spanPrice}>
          {/* {props.price.toLocaleString()} تومان */}
          20000000 تومان
        </span>
      </div>

      {/* details */}
      <div className="d-flex align-items-center justify-content-end px-4 mb-2">
        <div className="d-flex align-items-center px-2">
          <span className={styles.iconsDetail}>
            <FaLocationDot />
          </span>
          <span>تهران</span>
        </div>
        <div className="d-flex align-items-center px-2">
          <span className={styles.iconsDetail}>
            <FaBed />
          </span>
          <span>6</span>
        </div>
        <div className="d-flex align-items-center px-2">
          <span className={styles.iconsDetail}>
            <IoMdResize />
          </span>
          <span>250</span>
        </div>
      </div>

      {/* date */}
      <div className="d-flex align-items-center justify-content-end px-4 mb-2">
        <span className={styles.dateStyle}>1403/02/25</span>
      </div>
    </div>
  );
}

export default HomeBoxBig;
