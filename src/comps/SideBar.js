import React from "react";

import {
  InfoOutlined,
  PersonOutlined,
  HomeOutlined,
  ClearAllOutlined,
} from "@material-ui/icons";

const SideBar = () => {
  return (
    <div className="side-bar">
      <div className="side-bar-icon">
        <a href="/">
          <HomeOutlined />
        </a>
      </div>
      <div className="side-bar-icon">
        <a href="/About">
          <InfoOutlined />
        </a>
      </div>
      <div className="side-bar-icon">
        <a href="/Top">
          <ClearAllOutlined />
        </a>
      </div>
      <div className="side-bar-icon">
        <a href="/User">
          <PersonOutlined />
        </a>
      </div>
    </div>
  );
};

export default SideBar;
