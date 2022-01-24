import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FeaturedItem from "./FeaturedItem/FeaturedItem";
import "../FeaturedInfo/FeaturedInfo.css";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <FeaturedItem
        title="Revanue"
        money="2,415"
        rate="-4.5"
        Arrow={ArrowDownwardIcon}
        IconClass="featuredIcon negative"
      />

      <FeaturedItem
        title="Sales"
        money="4,415"
        rate="-1.5"
        Arrow={ArrowDownwardIcon}
        IconClass="featuredIcon negative"
      />
      <FeaturedItem
        title="Cost"
        money="4,415"
        rate="+11.5"
        Arrow={ArrowUpwardIcon}
        IconClass="featuredIcon"
      />
    </div>
  );
};

export default FeaturedInfo;
