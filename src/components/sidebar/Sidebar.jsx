import CategoryIcon from "@mui/icons-material/Category";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import InventoryIcon from "@mui/icons-material/Inventory";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";

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
          <li>
            <CategoryIcon className="icon--style" />
            <span>Raw Materials</span>
          </li>
          <li>
            <FactCheckIcon className="icon--style" />
            <span>Preparation</span>
          </li>
          <li>
            <InventoryIcon className="icon--style" />
            <span>Production</span>
          </li>
          <li>
            <WarehouseIcon className="icon--style" />
            <span>Storage</span>
          </li>
          <li>
            <LocalShippingIcon className="icon--style" />
            <span>Dispatch</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <span>Authentication</span>
      </div>
    </div>
  );
};

export default Sidebar;
