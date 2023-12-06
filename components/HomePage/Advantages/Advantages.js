import BoxAdvantage from "@/modules/BoxAdvantage/BoxAdvantage";
import React, { useState } from "react";
import db from "@/data/db.json"

function Advantages() {
  const [dataAdv, setdataAdv] = useState(db.dataAdv.buy)

  const btnBuyAdvHandler = () => {
    setdataAdv("")
    if (db.dataAdv) {
      setdataAdv(db.dataAdv.buy)
    }
  }
  const btnSellAdvHandler = () => {
    setdataAdv("")
    if (db.dataAdv) {
      setdataAdv(db.dataAdv.sell)
    }
  }
  const btnRentAdvHandler = () => {
    setdataAdv("")
    if (db.dataAdv) {
      setdataAdv(db.dataAdv.rent)
    }

  }
  const btnResearchAdvHandler = () => {
    setdataAdv("")
    if (db.dataAdv) {
      setdataAdv(db.dataAdv.research)
    }
  }
  return (
    <section className="p-2 my-2">
      <h3 className="titleSection">کاوش در همه چیز ،با اعتماد معامله کنید</h3>
      <div className="d-flex py-2">
        <button className="btnAdvantage" onClick={btnBuyAdvHandler}>خرید</button>
        <button className="btnAdvantage" onClick={btnSellAdvHandler}>فروش</button>
        <button className="btnAdvantage" onClick={btnRentAdvHandler}>اجاره</button>
        <button className="btnAdvantage" onClick={btnResearchAdvHandler}>اعتبار سنجی</button>
      </div>

      <section className="d-flex flex-column flex-lg-row justify-content-around align-items-lg-center">
        {dataAdv.map(data => (
          <BoxAdvantage {...data} key={data.id} />

        ))}

      </section>
    </section>
  );
}

export default Advantages;
