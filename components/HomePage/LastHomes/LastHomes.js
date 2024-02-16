import React, { useState } from 'react'
import db from "@/data/db.json"
import BoxHomeHomePage from '@/modules/BoxHomeHomePage/BoxHomeHomePage'

function LastHomes() {

    const [homes, setHomes] = useState(db.home.slice(-6).reverse())
    return (
        <section className="p-2 my-3">
            <h3 className="titleSection">آخرین آگهی های ثبت شده</h3>
            <div className='row'>
                {homes.map(home => (
                    <div className='col-12 col-md-6 col-xl-4 p-2 d-flex justify-content-center align-items-center' key={home.id}>
                        <BoxHomeHomePage {...home} />
                    </div>

                ))}
            </div>
        </section>
    )
}

export default LastHomes