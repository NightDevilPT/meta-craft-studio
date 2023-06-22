import PageBanner from "@/components/PageBanner";
import React, { useContext, useEffect } from "react";

import banner from "../../public/banner-1.webp";
import SideBarSection from "@/components/SideBarFrame";
import PageCard from "@/components/PageCard";

import { aboutData } from "@/Constants";
import { GlobalData } from "@/contextAPI/ContextAPI";

const about = () => {
  const { setActiveNav } = useContext(GlobalData);
  
  useEffect(() => {
    setActiveNav("about");
  }, [])
  
  return (
      <div className="main-section page-section">
        <PageBanner title={"about"} image={banner} />

        <div className="page-data-section container">
          <div className="page-info-section">
            {aboutData.map((items, index) => {
              return <PageCard data={items} key={"about-card" + index} />;
            })}
          </div>

          <SideBarSection />
        </div>
      </div>
  );
};

export default about;
