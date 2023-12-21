import Advantages from "@/components/HomePage/Advantages/Advantages";
import Header from "@/components/HomePage/Header/Header";
import LastHomes from "@/components/HomePage/LastHomes/LastHomes";
import React from "react";
//https://www.realestate.com.au/buy/
function HomePage() {
  return (
    <section>
      <Header />
      <Advantages />
      <LastHomes />
    </section>
  );
}

export default HomePage;
