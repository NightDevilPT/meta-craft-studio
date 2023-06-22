import Image from "next/image";
import React from "react";

import parse from "html-react-parser";

const PageCard = ({ data }) => {
  return (
      <div className="page-info-wrapper">
        <h1 className="title">{data.title}</h1>
        <span className="description">{parse(data.desp)}</span>
        {data.image && (
          <Image
            src={data.image}
            className="page-info-image"
            alt="about-info-image"
          />
        )}
      </div>
  );
};

export default PageCard;
