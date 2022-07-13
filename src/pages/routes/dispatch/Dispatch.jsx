import Sidebar from "../../../components/sidebar/Sidebar";

import "../../../styles/global.scss";

const Dispatch = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="current-container">Dispatch</div>;
    </div>
  );
};

export default Dispatch;
