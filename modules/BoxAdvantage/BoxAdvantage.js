import React from "react";
import styles from "@/styles/BoxAdvantage.module.css";

function BoxAdvantage(data) {
  return (
    <>
      {/* box in large */}
      <div className={`d-none d-lg-block ${styles.MainBoxAdv}`}>
        <div className="d-flex flex-column justify-content-between">
          <figure className="text-center">
            <img
              src={data.img}
              alt="amir yadavar"
              className="img-fluid"
            />
          </figure>

          <h2 className={styles.titleBoxAdv}>{data.title}</h2>

          <p className={styles.paragBox}>
            {
              data.parag
            }
          </p>

          <p className="text-info pointer">{data.linkParag}</p>
        </div>
      </div>

      {/* box in mobile */}

      <div className={`d-block d-lg-none ${styles.MainBoxAdv}`}>
        <div className="d-flex align-items-center">
          <figure className="">
            <img
              src={data.img}
              alt="amir yadavar"
              className="img-fluid"
            />
          </figure>

          <div className="d-flex flex-column justify-content-between p-3">

            <h2 className={styles.titleBoxAdv}>{data.title}</h2>

            <p className={styles.paragBox}>
              {data.parag}
            </p>

            <p className="text-info pointer">{data.linkParag}</p>
          </div>
        </div>

      </div>
    </>
  );
}

export default BoxAdvantage;
