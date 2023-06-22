import BannerFrame from "@/components/BannerFrame";
import Image from "next/image";
import React, {  useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import gif from "../../public/gif-video.gif";

import product from "../../public/stainless-steel-u-profile.webp";

import { ImQuotesLeft } from "react-icons/im";

import { Rating } from "react-simple-star-rating";

import { products, provides, Reveiews, benefitCard } from "@/Constants";


const index = () => {

  return (
    <div className="main-section">
      <BannerFrame />

      {/* Home Intro Section */}
      <div className="home-intro-section container">
        <div className="home-intro-gif">
          <Image src={gif} alt="home-intro-gif" />
        </div>
        
        <div className="home-intro-data-section">
          <h3 className="home-intro-subtitle">Welcome To</h3>
          <h1 className="title home-title">Metal Craft Studio</h1>
          <span className="description home-desp">
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
      <div className="home-product-section container">
        <h1 className="title">our products</h1>
        <span className="description">
          We cater high-quality metal job work services to those who manufacture
          Home wardrobes & Kitchens, Metal Furniture and interior, Automobiles
          Parts, Lift & Elevators, Electricity Panels and Medical Equipments
          within Delhi-NCR. MCS is also a prominent manufacturer and supplier of
          Stainless Steel Decorative Profiles (Inlays) & PVD Coated SS Sheets
          etc with PAN India presence. PVD Louver Panels READ MORE PVD Metal
          Sheets READ MORE Textured Sheets READ MORE
        </span>
        <div className="home-product-container home-card-container">
          {products.map((items, index) => {
            return <HomeProductCard data={items} key={"Product_" + index} />;
          })}
        </div>
      </div>

      {/* Home Provide Section */}
      <div className="home-product-section container">
        <h1 className="title">
          We Provides Sheet Metal Job Work Services
        </h1>
        <span className="description">
          We cater high-quality metal job work services to those who manufacture
          Home wardrobes & Kitchens, Metal Furniture and interior, Automobiles
          Parts, Lift & Elevators, Electricity Panels and Medical Equipments
          within Delhi-NCR. MCS is also a prominent manufacturer and supplier of
          Stainless Steel Decorative Profiles (Inlays) & PVD Coated SS Sheets
          etc with PAN India presence
        </span>

        <div className="home-product-container home-card-container">
          {provides.map((items, index) => {
            return <HomeProvideCard data={items} key={"Provide_" + index} />;
          })}
        </div>
      </div>

      {/* Home Why Choose Us Section */}
      <div className="home-benefit-section">
          <h1 className="title home-benefit-title">Why Choose Us?</h1>
          <Image src={product} alt="home-benefit-back-banner" />
          <div className="opacity-layer"></div>

        <div className="container">
        <div className="home-benefit-card-section">
        {benefitCard.map((items, index) => {
          return <HomeBenefitCard data={items} key={"Benefits_" + index} />;
        })}
      </div>
        </div>
      </div>

      <HomeReviewFrame />
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
        <span className="home-benefit-card-info-description">{data.desp}</span>
      </div>
    </div>
  );
};

export const HomeReviewFrame = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  return (
    <div className="home-review-section">
      <h1 className="home-review-title">Our Testimonials</h1>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">
        {Reveiews.map((items, index) => {
          return (
            <SwiperSlide key={"home_review_" + index}>
              <HomeReviewCard data={items} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export const HomeReviewCard = ({ data }) => {
  return (
    <div className="home-review-card-section">
      <span className="home-review-date">{data.date}</span>
      <Rating
        initialValue={data.rating}
        iconsCount={5}
        readonly={true}
        size={25}
        fillColorArray={["#f14f45", "#f16c45", "#f18845", "#f1b345", "#f1d045"]}
      />
      <span className="home-rating-description">
        <ImQuotesLeft className="description-quotes-icon" />
        {data.desp}
      </span>
    </div>
  );
};
