import React from "react";
import { logo, sun } from "../assets/index";
import { navlink } from "../constants/index";
import { useNavigation, Link } from "react-router-dom";
const Sidebar = () => {
  const navigation = useNavigation();
  const [isActive, setIsActive] = useState("dashboard");
  return (
    <div className="flex justify-between items-center flex-col sticky top-5 h-[93vh]">
      <Link to="/">{/* <Icon /> */}</Link>
    </div>
  );
};

export default Sidebar;
