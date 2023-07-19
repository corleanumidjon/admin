import React, { useState } from "react";
import { useSelector } from "react-redux";
import { IoSearchOutline, IoNotificationsOutline } from "react-icons/io5";
import "./DashBoardHeader.scss";

export const DashBoardHeader = () => {
  const { token } = useSelector((state) => state);

  const [date, setDate] = useState(new Date());

  return (
    <>
      <header className="site-header">
        <nav className="header__wrapper">
          <div className="header__box1">
            <h2 className="header__hello">Hello {token.token}</h2>
            <data className="header__date">
              {date.toUTCString().slice(0, 25)}
            </data>
          </div>
          <div className="header__box2">
            <button className="header__src-btn">
              <IoSearchOutline />
            </button>
            <input
              className="header__input"
              type="text"
              name=""
              id=""
              placeholder="Search"
            />
          </div>
          <div className="header__box3">
            <button className="header__notification-btn">
              {/* <IoNotificationsOutline /> */}🔔
            </button>
            <p className="header__name">{token.token}</p>
            <button className="header__user-btn">
              <img
                className="header__user-img"
                src="https://www.pngitem.com/pimgs/m/150-1503945_transparent-user-png-default-user-image-png-png.png"
                alt="User"
              />
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};
