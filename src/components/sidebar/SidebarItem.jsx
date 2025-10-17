import React from "react";
import styles from "./SidebarItem.module.css";

function SidebarItem({ data }) {
  return (
    <div>
      <a href={data.path}>{data.name}</a>
    </div>
  );
}

export default SidebarItem;
