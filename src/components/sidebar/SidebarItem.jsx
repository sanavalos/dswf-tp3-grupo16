import React from "react";
import styles from "./SidebarItem.module.css";

function SidebarItem({ data }) {
  return (
    <div className={styles}>
      <a href={data.path}>{data.name}</a>
    </div>
  );
}

export default SidebarItem;
