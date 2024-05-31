import styles from "@/styles/SellRecord.module.css";

function SellRecord() {
  

  return (
    <section className={styles.secSell} id="secRecord">
      <div className="d-flex align-items-center justify-content-around h-100">
        <div className={styles.boxRecord}>
          <span data-goal="125" className="spanRecord">
           +125
          </span>
          <span>سرمایه گذاری موفق</span>
        </div>
        <div className={styles.boxRecord}>
          <span data-goal="210" className="spanRecord">
            +210
          </span>
          <span>معامله موفق</span>
        </div>
        <div className={styles.boxRecord}>
          <span data-goal="89" className="spanRecord">
            +89
          </span>
          <span>وام موفق</span>
        </div>
      </div>
    </section>
  );
}

export default SellRecord;
