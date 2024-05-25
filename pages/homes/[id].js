import { useRouter } from 'next/router'
import React, { useState } from 'react'
import db from "@/data/db.json"
import styles from "@/styles/mainHome.module.css"

import { GoAlert } from "react-icons/go";
import { FaAngleLeft } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { GoShareAndroid } from "react-icons/go";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

function HomeMainDetail() {
  const route = useRouter()
  const findHome = db.home.find(home => Number(home.id) === Number(route.query.id))
  console.log(findHome);

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12 col-xl-6 d-flex justify-content-center p-2">
          <div className={styles.containerInfo}>
            <h1 className={styles.title}>{findHome.title}</h1>

            <div className='d-flex align-items-center py-4'>
              <span className={styles.spanDate}>تاریخ انتشار :</span>
              <span className={styles.spanDate}>{findHome.date}</span>
            </div>

            <div className={styles.alert}>
              <div className="">
                <span className={styles.alertIcon}><GoAlert /></span>
                <span className={styles.titleAlert}>زنگ خطرهای قبل از معامله</span>
              </div>
              <span><FaAngleLeft /></span>
            </div>

            <div className="flexbetween py-4">
              <div className="">
                <button className={styles.buttonRed}>اطلاعات تماس</button>
                <button className={styles.buttonWhite}>چت</button>
              </div>
              <div className="">
                <span className={styles.iconCall}><CiBookmark /></span>
                <span className={styles.iconCall}><GoShareAndroid /></span>
              </div>
            </div>

            <div className="d-flex justify-content-center align-items-center px-5">
              <div className={styles.divInfo}>
                <span>متراژ</span>
                <span>۱۱۰</span>
              </div>
              <div className={styles.yearBuild}>
                <span>ساخت</span>
                <span>۱۱۰</span>
              </div>
              <div className={styles.divInfo}>
                <span>اتاق</span>
                <span>۱۱۰</span>
              </div>
            </div>
            <h3>{findHome.price}</h3>
          </div>
        </div>
        <div className="col-12 col-xl-6 p-2">
          {/* swiper */}
          <div className="d-flex justify-content-center align-items-center w-100">
            <div className={styles.containerSwiper}>
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
                    <img src={findHome.img} alt="amir yadavar" className="img-fluid" />
                  </figure>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <figure>
                    <img
                      src={findHome.img2}
                      alt="amir yadavar"
                      className="img-fluid"
                    />
                  </figure>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                  <figure>
                    <img
                      src={findHome.img3}
                      alt="amir yadavar"
                      className="img-fluid"
                    />
                  </figure>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default HomeMainDetail