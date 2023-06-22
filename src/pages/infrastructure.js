import React, { useContext, useEffect } from "react";

import banner from "../../public/banner-1.webp";

import { InfrastructureData } from "@/Constants";
import PageCard from "@/components/PageCard";
import SideBarSection from "@/components/SideBarFrame";
import PageBanner from "@/components/PageBanner";
import { GlobalData } from "@/contextAPI/ContextAPI";

const index = () => {
  const { setActiveNav } = useContext(GlobalData);
  
  useEffect(() => {
    setActiveNav("infrastructure");
  }, [])
  
  return (
    <div className="main-section page-section">
      <PageBanner title={'infrastructure'} image={banner} />

      <div className="page-data-section container">
        <div className="page-info-section">
          {InfrastructureData.map((items, index) => {
            return <PageCard data={items} key={"infrastructure-card" + index} />;
          })}
        </div>

        <SideBarSection />
      </div>
    </div>
  );
};

export default index;
