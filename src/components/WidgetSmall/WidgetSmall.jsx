import React from "react";
import "./WidgetSmall.css";
import VisibilityIcon from "@mui/icons-material/Visibility";

const WidgetSmall = () => {
  return (
    <div className="small">
      <span className="widgetSmTitle">New join Member</span>
      <ul className="widgetSmList">
        <li className="widgetSmItem">
          <img
            alt="img"
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="username">Anna Keller</div>
            <div className="userTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmItem">
          <img
            alt="img"
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="username">Anna Keller</div>
            <div className="userTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
      <ul className="widgetSmList">
        <li className="widgetSmItem">
          <img
            alt="img"
            src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&dpr=2&w=500"
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <div className="username">Anna Keller</div>
            <div className="userTitle">Software Engineer</div>
          </div>
          <button className="widgetSmButton">
            <VisibilityIcon className="widgetSmIcon" />
            Display
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WidgetSmall;
