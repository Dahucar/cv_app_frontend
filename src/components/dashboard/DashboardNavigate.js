import React from "react";
import "../../index.css";
import "antd/dist/antd.css";
import { Menu } from "antd";
import {
  SettingOutlined,
  CopyOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
const { SubMenu } = Menu;

export const DashboardNavigate = () => {
  return (
    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
      <Menu.Item key="1" icon={<CopyOutlined />}>
        <Link to="/dashboard">Your resumes</Link>
      </Menu.Item>
      <SubMenu key="sub1" icon={<SettingOutlined />} title="Customize">
        <Menu.Item key="3">
          <Link to="/dashboard/skills">Skills</Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link to="/dashboard/education">Education</Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link to="/dashboard/experience">Experience</Link>
        </Menu.Item>
        <Menu.Item key="10">
          <Link to="/dashboard/other">Other activities</Link>
        </Menu.Item>
      </SubMenu>
      <Menu.Item key="9" icon={<LogoutOutlined />}>
        <Link to="/">Logout</Link>
      </Menu.Item>
    </Menu>
  );
};
