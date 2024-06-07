import React from 'react'
import styles from '@/styles/Sell.module.css'

function Sell() {
    return (
        <section className='position-relative'>
            <div className={styles.container}></div>
            <div className="container d-flex flex-column align-items-center">
                <h2 className={styles.title}>راهنمای نهایی فروشندگان خانه</h2>
                <p className={styles.text}>
                    فروش خانه شما می تواند یک فرآیند گیج کننده و استرس زا باشد. کشف کنید که چگونه و چه زمانی خانه خود را بفروشید، چقدر هزینه دارد، چگونه برای فروش آماده شوید و در یک مشاور املاک به دنبال چه چیزی باشید. راهنمای کامل ما برای فروش به تمام سوالات شما پاسخ می دهد و به شما کمک می کند تا هر مرحله از فرآیند را برای فروش موفق برنامه ریزی کنید.
                </p>
                <h2 className={styles.title}>فروش خانه، یک تصمیم بزرگ </h2>
                <p className={styles.text}>
                    فروش خانه شما یک تصمیم بزرگ است، هم از نظر مالی و هم از نظر عاطفی. زمانی که تصمیم به فروش گرفتید، چندین مرحله پیش از عرضه خانه شما به بازار وجود دارد. دریابید که چگونه برای خانه خود قیمت تعیین کنید، چه زمانی و چگونه بفروشید و چه اتفاقی برای وام مسکن شما می افتد که خانه خود را بفروشید. زمان آماده شدن برای فروش است.
                </p>
                
            </div>
        </section>
    )
}

export default Sell