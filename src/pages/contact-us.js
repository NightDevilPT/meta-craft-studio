import React from "react";

import PageBanner from "@/components/PageBanner";

import banner from "../../public/banner-1.webp";
import SideBarSection from "@/components/SideBarFrame";
import ContactUsFrame from "@/components/ContactUsFrame";

const index = () => {
  return (
    <div className="main-section page-section">
      <PageBanner title={"contact us"} image={banner} />

      <div className="page-data-section container">
          <ContactUsFrame />
          <SideBarSection />
        </div>
    </div>
  );
};

export default index;
