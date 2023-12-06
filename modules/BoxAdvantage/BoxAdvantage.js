import React from "react";
import styles from "@/styles/BoxAdvantage.module.css";

function BoxAdvantage() {
  return (
    <div className="d-flex flex-column justify-content-between">
      <figure>
        <img
          src="/img/research1.svg"
          alt="amir yadavar"
          className="img-fluid"
        />
      </figure>

      <h2 className={styles.titleBoxAdv}>به داده های بازار بپردازید</h2>

      <p>
        از روندهای املاک و مستغلات نوشته شده توسط اقتصاددانان و کارشناسان املاک
        مطلع باشید
      </p>

      <p>درباره بازار املاک تحقیق کنید</p>
    </div>
  );
}

export default BoxAdvantage;
