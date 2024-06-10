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

                <div className={styles.containerBox}>
                    <div className="row">

                        <div className="col-12 col-lg-6 p-4">
                            <h2 className={styles.titleBox}>برای فروش خانه با ما در ارتباط باشید</h2>
                            <p className={styles.paragraph}>برای ارتباط با ما میتوانید با یکی از راه های ارتباطی زیر اقدام کنید</p>
                            <div className="d-flex align-items-center justify-content-around  py-2">
                                <div className="d-flex align-items-center mx-1">
                                    <span className="spanInfoColor">تلفن : </span>
                                    <span className="spanInfo">۰۲۱-۱۲۱۲۱۳۱۱</span>
                                </div>
                                <div className="d-flex align-items-center mx-1">
                                    <span className="spanInfoColor">همراه : </span>
                                    <span className="spanInfo">۰۹۱۹-۸۱۱۸۵۷۳</span>
                                </div>
                                <div className="d-flex align-items-center mx-1">
                                    <span className="spanInfoColor">ایمیل : </span>
                                    <span className="spanInfo">amiresya@gmail.com</span>
                                </div>
                            </div>

                            <p className="address">
                                آدرس : تهران سعادت آباد ، سرو غربی ، خیابان اول ،کوچه دوم ، ساختمان
                                آرمان
                            </p>
                            <p className={styles.paragraph}>همچنین با ثبت شماره خود ، همکاران ما در اولین فرصت با شما تماس میگیرند</p>
                            <div className="d-flex align-items-center justify-content-center">
                                <form className={styles.form}>
                                    <input type="number" placeholder='شماره همراه' className={styles.input} />
                                    <input type="submit" value="ثبت شماره همراه" className={styles.button} />
                                </form>
                            </div>

                        </div>

                        <div className="col-12 col-lg-6 p-2 d-flex align-items-center">
                            <figure className={styles.figure}>
                                <img src="./img/connectUs.png" alt="connect-Us" className='img-fluid' />
                            </figure>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Sell