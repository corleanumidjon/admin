import { Link, NavLink } from "react-router-dom";
import "./NavBar.scss";
import NavBarLogo from "../../assets/images/NabBar-logo.svg";
import {
  DashboardIcon,
  ExchangeIcon,
  LibraryIcon,
  PayoutsIcon,
  SchedulesIcon,
  SettingsIcon,
} from "../../assets/images/Icons/Icons";

export const NavBar = () => {
  return (
    <>
      <div className="navbar-wrapper">
        <nav className="navbar-inner">
          <div className="navbar-logo-box">
            <Link to="/">
              <img src={NavBarLogo} alt="Site nav bar logo" />
            </Link>
          </div>

          <ul className="navbar-list">
            <li className="navbar-item">
              <NavLink to="/" className="navbar-link">
                <DashboardIcon />
                <span className="navbar-link-text">Dashboard</span>
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/exchange" className="navbar-link">
                <ExchangeIcon />
                <span className="navbar-link-text">Exchange</span>
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/library" className="navbar-link">
                <LibraryIcon />
                <span className="navbar-link-text">Library</span>
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/schedules" className="navbar-link">
                <SchedulesIcon />
                <span className="navbar-link-text">Schedules</span>
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/payouts" className="navbar-link">
                <PayoutsIcon />
                <span className="navbar-link-text">Payouts</span>
              </NavLink>
            </li>
            <li className="navbar-item">
              <NavLink to="/settings" className="navbar-link">
                <SettingsIcon />
                <span className="navbar-link-text">Settings</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
