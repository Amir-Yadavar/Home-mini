import React, { useEffect, useState } from 'react'
import styles from "@/styles/homesPage.module.css"
import BoxHomeHomePage from '@/modules/BoxHomeHomePage/BoxHomeHomePage'
import db from "@/data/db.json"
import HomeBoxBig from '@/modules/HomeBoxBig/HomeBoxBig'

function AllHome() {
    const [homes, setHomes] = useState([...db.home])
    const [inputValue, setinputValue] = useState("")



    // search home
    useEffect(() => {
        let filterHome = db.home.filter(home => home.title.includes(inputValue))
        setHomes(filterHome)
    }, [inputValue])

    //    inputSearchHandler
    const inputSearchHandler = (e) => {
        setinputValue(e.target.value);

    }
    return (

        <div>
            <section className="container">
                <div className="row">
                    {/* aside */}
                    <aside className="d-none d-lg-block col-lg-4 p-3 border border-danger">zxc</aside>
                    {/* homes */}
                    <div className="col-sm-12 col-md-12 col-lg-8  p-3 border border-danger">
                        {/* search */}
                        <div className={styles.searchInput}>
                            <input type='text' placeholder='جستجو' onChange={inputSearchHandler} />

                        </div>

                        <div className="d-flex flex-column align-items-center">
                            <HomeBoxBig />
                        </div>

                    </div>
                </div>
            </section>
            <div className='row'>
                {homes.map(home => (
                    <div className='col-12 col-md-6 col-xl-4 p-2 d-flex justify-content-center align-items-center' key={home.id}>
                        <BoxHomeHomePage {...home} />
                    </div>

                ))}
            </div>
        </div>
    )
}

export default AllHome