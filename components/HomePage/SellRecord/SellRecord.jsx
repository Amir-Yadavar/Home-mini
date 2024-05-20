import React from "react";
import styles from "@/styles/SellRecord.module.css";

function SellRecord() {
  
  const scrollHandler = ()=>{
    console.log("ok");
  }
  
    return (
    <section className={styles.secSell} onScroll={scrollHandler}>
      <div className="d-flex align-items-center justify-content-around h-100">
        <div className={styles.boxRecord}>
          <span>+ 500</span>
          <span>معامله موفق</span>
        </div>
        <div className={styles.boxRecord}>
          <span>+ 500</span>
          <span>معامله موفق</span>
        </div>
        <div className={styles.boxRecord}>
          <span>+ 500</span>
          <span>معامله موفق</span>
        </div>
      </div>
    </section>
  );
}

export default SellRecord;
