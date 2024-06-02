import React, { useEffect, useState } from 'react'
import styles from "@/styles/homesPage.module.css"
import BoxAside from '@/modules/‌BoxAside/BoxAside'
import HomeBoxBig from '@/modules/HomeBoxBig/HomeBoxBig'
import db from "@/data/db.json"

function BuyHome() {

    const [homes, setHomes] = useState('')
    const [inputValue, setinputValue] = useState("")


    useEffect(() => {
        let newState = db.home.filter(home => home.type === "buy")
        setHomes(newState)
        console.log(homes);
    }, [])

    // search home
    useEffect(() => {
        let newState = db.home.filter(home => home.type === "buy")
        let filterHome = newState.filter(home => home.title.includes(inputValue))
        setHomes(filterHome.reverse())
    }, [inputValue])

    //    inputSearchHandler
    const inputSearchHandler = (e) => {
        setinputValue(e.target.value);

    }

    return (
        <section className="container">
            <div className="row">
                {/* aside */}
                <aside className="d-none d-lg-flex flex-column align-items-center col-lg-4 p-3">
                    <div className={styles.filterHomes}>
                        {/*  */}
                        <div className="d-flex flex-column px-2 py-3">
                            <p className={styles.paragTitr}>شما لیاقت بهترین هارو دارید</p>

                        </div>
                    </div>

                    <BoxAside img="./img/house-3.jpeg" title1="بهترین مشاوران" title2="بهترین لوکیشن ها" title3="بهترین قیمت ها" />
                    <BoxAside img="./img/story-1.jpeg" title1="کم ترین کارمزد" title2="کم ترین زمان" title3="کم ترین ریسک" />
                    <BoxAside img="./img/back.jpg" title1="خیالی راحت" title2="آینده روشن" title3="مورد اعتماد همه" />
                </aside>
                {/* homes */}
                <div className="col-sm-12 col-md-12 col-lg-8  p-3">
                    {/* search */}
                    <div className={styles.searchInput}>
                        <p className={styles.paragTitr}>بهترین ها را از ما بخواهید</p>
                        <input type='text' placeholder='جستجو' onChange={inputSearchHandler} />

                    </div>

                    <div className="d-flex flex-column align-items-center">
                        {homes && homes.map(home => (
                            <div className="" key={home.id}><HomeBoxBig {...home} />
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default BuyHome