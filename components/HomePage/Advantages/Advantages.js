import BoxAdvantage from "@/modules/BoxAdvantage/BoxAdvantage";
import React from "react";

function Advantages() {
  return (
    <section className="p-2">
      <h3 className="titleSection">کاوش در همه چیز ،با اعتماد معامله کنید</h3>
      <div className="d-flex py-2">
        <button className="btnAdvantage">خرید</button>
        <button className="btnAdvantage">فروش</button>
        <button className="btnAdvantage">اجاره</button>
        <button className="btnAdvantage">اعتبار سنجی</button>
      </div>

      <div className="d-flex">
        <BoxAdvantage />
      </div>
    </section>
  );
}

export default Advantages;
