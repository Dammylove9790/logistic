import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import "./DriverDB.scss";
import DBNav from "../../component/DBNav/DBNav";
import DriverController from "../../component/DriverController/DriverController";
import DBMobileControllers from "../../component/MobileControllers/DBMobileControllers";
import UserInfo from "../../component/UserInfo/UserInfo";

function DriverDB() {
  const menu = useSelector((state) => state.toggleReducer.dashboarMenu);
  const user = useSelector((state) => state.toggleReducer.user);
  const navigate = useNavigate();
  useEffect(() => {
    navigate("dashboard");
  }, []);
  return (
    <div className="DriverDB">
      <div className="DriverDB__wrapper">
        <DBNav />
        {menu && <DBMobileControllers />}
        <div className="DriverDB__content">
          <DriverController />
          <div className="tab__container">
            <Outlet />
          </div>
          {user && <UserInfo />}
        </div>
      </div>
    </div>
  );
}

export default DriverDB;
