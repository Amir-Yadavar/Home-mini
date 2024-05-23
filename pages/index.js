import Advantages from "@/components/HomePage/Advantages/Advantages";
import Explore from "@/components/HomePage/Explore/Explore";
import Header from "@/components/HomePage/Header/Header";
import LastHomes from "@/components/HomePage/LastHomes/LastHomes";
import SellRecord from "@/components/HomePage/SellRecord/SellRecord";
import React from "react";
//https://www.realestate.com.au/buy/
function HomePage() {
  return (
    <section className="container-fluid container-xxl">
      <Header />
      <Advantages />
      <LastHomes />
      <Explore />
      <SellRecord />
    </section>
  );
}

export default HomePage;
