import { useState } from "react";
import { Link } from "react-router-dom";

export default function Menu() {

  const [selectedMenu, setSelectedMenu] = useState(0)
  const [isProfileDropDown, setIsProfileDropDown] = useState(false)

  // 1. Get the username from local storage (Fallback to 'User' if missing)
  const username = localStorage.getItem("username") || "User";
  
  // 2. Extract the first 2 letters for the Avatar and make them uppercase
  const avatar = username.slice(0, 2).toUpperCase();

  let handleMenuClick = (index) => {
    setSelectedMenu(index)
  }

  let handleProfileClick = () => {
    setIsProfileDropDown(!isProfileDropDown)
  }

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <>
      <div className="menu-container">
        <img src="logo.png" style={{ width: "50px" }} />
        <div className="menus">
          <ul>
            <li>
              <Link style={{textDecoration:"none"}} to="/" onClick={() => {
                handleMenuClick(0)
              }}>
                <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to="/orders" onClick={() => {
                handleMenuClick(1)
              }}>
                <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>Orders</p>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to="/holdings" onClick={() => {
                handleMenuClick(2)
              }}>
                <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>Holdings</p>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to="/positions" onClick={() => {
                handleMenuClick(3)
              }}>
                <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>Positions</p>
              </Link>
            </li>
            <li>
              <Link style={{textDecoration:"none"}} to="/funds" onClick={() => {
                handleMenuClick(4)
              }}>
                <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>Funds</p>
              </Link>
            </li>
            
          </ul>
          <hr />
          {/* 3. Inject the dynamic username and avatar here */}
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">{avatar}</div>
            <p className="username">{username}</p>
          </div>
        </div>
      </div>
    </>
  );
}
