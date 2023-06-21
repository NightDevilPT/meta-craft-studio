import Image from "next/image";
import React from "react";

import parse from "html-react-parser";

const PageCard = ({ data }) => {
  return (
    <div className="page-info-section">
      <div className="page-info-wrapper">
        <h1 className="page-info-title">{data.title}</h1>
        <span className="page-info-desp">{parse(data.desp)}</span>
        {data.image && (
          <Image
            src={data.image}
            className="page-info-image"
            alt="about-info-image"
          />
        )}
      </div>
    </div>
  );
};

export default PageCard;
