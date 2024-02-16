import { useRouter } from 'next/router'
import React, { useState } from 'react'
import db from "@/data/db.json"

function HomeMainDetail() {
  const route = useRouter()
  const findHome = db.home.find(home => Number(home.id) === Number(route.query.id))
  console.log(findHome);
  const [detailHouse] = useState(findHome)

  return (
    <div>
      <h1>{detailHouse.title}</h1>
      <h2>id :{detailHouse.id}</h2>
      <h3>{detailHouse.price}</h3>
    </div>
  )
}

export default HomeMainDetail