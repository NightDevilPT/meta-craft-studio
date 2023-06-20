import BannerFrame from "@/components/BannerFrame";
import Image from "next/image";
import React from "react";

import gif from "../../public/gif-video.gif";
import product from "../../public/stainless-steel-u-profile.webp";
import provide1 from "../../public/job-work.webp";
import provide2 from "../../public/sheet-laser-cutting.webp";
import provide3 from "../../public/sheet-v-grooving.webp";
import provide4 from "../../public/sheet-metal-welding.webp";

import {
  FaChartArea,
  FaSignal,
  FaChartPie,
  FaChartLine,
  FaFileContract,
  FaGlobeAmericas,
} from "react-icons/fa";

const products = [
  {
    image: product,
    buttonName: "Read More",
    title: "PVD Louver Panels",
  },
  {
    image: product,
    buttonName: "Read More",
    title: "PVD Metal Sheets",
  },
  {
    image: product,
    buttonName: "Read More",
    title: "Textured Sheets",
  },
  {
    image: product,
    buttonName: "Read More",
    title: "Stainless Steel Decorative Profiles",
  },
];

const provides = [
  {
    title: "Job Work",
    image: provide1,
  },
  {
    title: "Sheet Laser Cutting",
    image: provide2,
  },
  {
    title: "Sheet Metal Bending",
    image: provide3,
  },
  {
    title: "Sheet V-Grooving",
    image: provide4,
  },
];

const benefitCard = [
  {
    icon: <FaChartArea className="home-benefit-card-icon" />,
    title: "CNC Leaser Cutting",
    desp:"Huge bed size of up to 2*4 mtr."
  },
  {
    icon: <FaSignal className="home-benefit-card-icon" />,
    title: "V-Groove Technology",
    desp:"V-Groove (90°) for sharp edges profiles"
  },
  {
    icon: <FaChartPie className="home-benefit-card-icon" />,
    title: "Customization Available",
    desp:"Customized shapes and sizes as per your requirements"
  },
  {
    icon: <FaChartLine className="home-benefit-card-icon" />,
    title: "Competitive Prices",
    desp:"Price is negotiable (T&C) Explore our process."
  },
  {
    icon: <FaFileContract className="home-benefit-card-icon" />,
    title: "PAN India Delivery",
    desp:"Inlay profiles delivery throughout PAN india."
  },
  {
    icon: <FaGlobeAmericas className="home-benefit-card-icon" />,
    title: "Free Samples",
    desp:"Free samples can be provided (T&C)"
  }
]

const index = () => {
  return (
    <div className="main-section">
      <BannerFrame />

      {/* Home Intro Section */}
      <div className="home-intro-section">
        <div className="home-intro-gif">
          <Image src={gif} alt="home-intro-gif" />
        </div>
        <div className="home-intro-data-section">
          <h3 className="home-intro-subtitle">Welcome To</h3>
          <h1 className="home-intro-title">Metal Craft Studio</h1>
          <span className="home-intro-description">
            Metal Craft Studio (MCS), a Narela Delhi-based company, Provides
            high-quality metal job work services to those who manufacture Home
            wardrobes & Kitchens, Metal Furniture and interior, Automobiles
            Parts, Lift & Elevators, Electricity Panels and Medical equipment
            within Delhi-NCR. MCS is also a prominent manufacturer and supplier
            of Stainless Steel Decorative Profiles (Inlays) & PVD Coated SS
            Sheets etc with PAN India presence. We are one of the few businesses
            in Delhi with a CNC laser cutting system that can design and cut
            various metals, including brass, copper, zinc, and aluminium, with a
            bed size of up to 2*4 metres.
          </span>
          <button className="home-intro-readmore-btn">Read More</button>
        </div>
      </div>

      {/* Home Product Section */}
      <div className="home-product-section">
        <h1 className="home-product-title">our products</h1>
        <span className="home-product-description">
          We cater high-quality metal job work services to those who manufacture
          Home wardrobes & Kitchens, Metal Furniture and interior, Automobiles
          Parts, Lift & Elevators, Electricity Panels and Medical Equipments
          within Delhi-NCR. MCS is also a prominent manufacturer and supplier of
          Stainless Steel Decorative Profiles (Inlays) & PVD Coated SS Sheets
          etc with PAN India presence. PVD Louver Panels READ MORE PVD Metal
          Sheets READ MORE Textured Sheets READ MORE
        </span>
        <div className="home-product-container">
          {products.map((items, index) => {
            return <HomeProductCard data={items} key={"Product_" + index} />;
          })}
        </div>
      </div>

      {/* Home Provide Section */}
      <div className="home-product-section">
        <h1 className="home-product-title">
          We Provides Sheet Metal Job Work Services
        </h1>
        <span className="home-product-description">
          We cater high-quality metal job work services to those who manufacture
          Home wardrobes & Kitchens, Metal Furniture and interior, Automobiles
          Parts, Lift & Elevators, Electricity Panels and Medical Equipments
          within Delhi-NCR. MCS is also a prominent manufacturer and supplier of
          Stainless Steel Decorative Profiles (Inlays) & PVD Coated SS Sheets
          etc with PAN India presence
        </span>

        <div className="home-product-container">
          {provides.map((items, index) => {
            return <HomeProvideCard data={items} key={"Provide_" + index} />;
          })}
        </div>
      </div>

      {/* Home Why Choose Us Section */}
      <div className="home-benefit-section">
        <h1 className="home-benefit-title">Why Choose Us?</h1>
        <Image src={product} alt="home-benefit-back-banner" />
        <div className="opacity-layer"></div>

        <div className="home-benefit-card-section">
          {
            benefitCard.map((items, index) => {
              return <HomeBenefitCard data={items} key={'Benefits_'+index} />
            })
          }
        </div>
      </div>
    </div>
  );
};

export default index;

export const HomeProductCard = ({ data }) => {
  return (
    <div className="home-product-info">
      <div className="home-product-info-image-section">
        <Image src={data.image} alt="product-card-image" />
        <h3 className="home-product-info-title">{data.title}</h3>
      </div>
      <button className="home-product-readmore-btn">{data.buttonName}</button>
    </div>
  );
};

export const HomeProvideCard = ({ data }) => {
  return (
    <div data={data.title} className="home-provide-card">
      <Image effect="blur" src={data.image} alt="home-provide-image" />
    </div>
  );
};

export const HomeBenefitCard = ({ data }) => {
  return (
    <div className="home-benefit-card-wrapper">
      {data.icon}
      <div className="home-benefit-card-info-section">
        <h2 className="home-benefit-card-info-title">{data.title}</h2>
        <span className="home-benefit-card-info-description">
          {data.desp}
        </span>
      </div>
    </div>
  );
};
