import CategoryIcon from "@mui/icons-material/Category";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import InventoryIcon from "@mui/icons-material/Inventory";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

import { Link } from "react-router-dom";

// scss
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span id="logo">Smiley Drinks</span>
      </div>
      <div className="center">
        <span className="title">Rooms</span>
        <ul>
          <Link to="/materials" style={LinkStyle}>
            <li>
              <CategoryIcon className="icon--style" />
              <span>Raw Materials</span>
            </li>
          </Link>
          <Link to="/preparation" style={LinkStyle}>
            <li>
              <FactCheckIcon className="icon--style" />
              <span>Preparation</span>
            </li>
          </Link>
          <Link to="/production" style={LinkStyle}>
            <li>
              <InventoryIcon className="icon--style" />
              <span>Production</span>
            </li>
          </Link>
          <Link to="/storage" style={LinkStyle}>
            <li>
              <WarehouseIcon className="icon--style" />
              <span>Storage</span>
            </li>
          </Link>
          <Link to="/dispatch" style={LinkStyle}>
            <li>
              <LocalShippingIcon className="icon--style" />
              <span>Dispatch</span>
            </li>
          </Link>
        </ul>
      </div>
      <div className="bottom">
        <span>Authentication</span>
      </div>
    </div>
  );
};

const LinkStyle = {
  color: "#ffffff",
};

export default Sidebar;
