import React from "react";
import "../FeaturedInfo.css";

const FeaturedItem = ({ title, money, rate, Arrow, IconClass }) => {
  return (
    <div className="featuredItem">
      <span className="featuredTitle">{title}</span>
      <div className="featuredMoneyContainer">
        <span className="featuredMoney">${money}</span>
        <span className="featuredMoneyRate">
          {rate} <Arrow className={IconClass} />
        </span>
      </div>
      <span className="featuredSub">Compared to last month</span>
    </div>
  );
};

export default FeaturedItem;
