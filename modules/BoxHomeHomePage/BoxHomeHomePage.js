import React from 'react'
import styles from "@/styles/BoxHomeHomePage.module.css"
import Link from 'next/link'

function BoxHomeHomePage(props) {
    return (
        <Link href={`/homes/${props.id}`}>
            <div className="m-1">
                <div className={styles.containerBoxHome}>
                    <figure>
                        <img src={props.img} alt='amir yadavar' className='img-fluid' style={{ height: "260px" }} />
                    </figure>

                    <div className="p-2">
                        <h2 className="titleSection">{props.title}</h2>
                        <div className='flexbetween p-2'>
                            <span className={styles.spanHome}>{props.location}</span>
                            <span className={styles.spanHome}>{props.roomCount} اتاق</span>
                        </div>
                        <div className='flexbetween p-2'>
                            <span className={styles.spanHome}>{props.meterage} متر</span>
                            <span className={styles.spanHome}>{props.price.toLocaleString()} تومان</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default BoxHomeHomePage