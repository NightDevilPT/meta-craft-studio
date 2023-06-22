import React from "react";

import banner from "../../public/banner-1.webp";

import { InfrastructureData } from "@/Constants";
import PageCard from "@/components/PageCard";
import SideBarSection from "@/components/SideBarFrame";
import PageBanner from "@/components/PageBanner";

const index = () => {
  
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
