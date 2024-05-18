import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import { RiHome3Line } from "react-icons/ri";

import styles from "@/styles/BoxAside.module.css"

function BoxAside(props) {
  return (
    <div className={styles.filterHomes}>
      <div className={styles.header}>
        <div className="d-flex align-items-center">
          <div className={styles.titleLogo}>خونه مونه</div>
          <div className="logoNav">
            <div className="logoWhite">
              <RiHome3Line />
            </div>
          </div>
        </div>
      </div>

      <figure>
        <img src={props.img} alt="" className="img-fluid" />
      </figure>

      <div className="d-flex align-items-center p-2">
        <span>
          <FaCircleCheck  className={styles.iconTitle}/>
        </span>
        <span className={styles.titleIcon}>{props.title1}</span>
      </div>
      <div className="d-flex align-items-center p-2">
        <span>
          <FaCircleCheck  className={styles.iconTitle}/>
        </span>
        <span className={styles.titleIcon}>{props.title2}</span>
      </div>
      <div className="d-flex align-items-center p-2">
        <span>
          <FaCircleCheck  className={styles.iconTitle}/>
        </span>
        <span className={styles.titleIcon}>{props.title3}</span>
      </div>
    </div>
  );
}

export default BoxAside;
