import React, { useEffect, useState } from 'react'
import styles from "@/styles/homesPage.module.css"
import BoxHomeHomePage from '@/modules/BoxHomeHomePage/BoxHomeHomePage'
import db from "@/data/db.json"

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
            <input type='text' placeholder='جستجو' onChange={inputSearchHandler} />
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