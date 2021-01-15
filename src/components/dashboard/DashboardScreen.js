import React, { useState } from "react";
import "../../index.css";
import "antd/dist/antd.css";
import { Layout, Menu,Typography } from "antd";
import {
  SettingOutlined,
  CopyOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { ResumesList } from "./resumes/ResumesList";

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export const DashboardScreen = () => {
  const [state, setState] = useState(false);
  const handleCollapse = () => { setState( !state ); };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={ state } onCollapse={handleCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={ <CopyOutlined /> }>
            Resumes
          </Menu.Item> 
          <SubMenu key="sub1" icon={ <SettingOutlined /> } title="Customize">
            <Menu.Item key="3">Skills</Menu.Item>
            <Menu.Item key="4">Education</Menu.Item>
            <Menu.Item key="5">Experience</Menu.Item>
            <Menu.Item key="10">Other activities</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<LogoutOutlined />}>
            <Link to="/">Logout</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} >
          <Title level={3} style={{ color: 'white', lineHeight: '60px', marginLeft: '15px' }}>
            Wellcome back Daniel HC!
          </Title>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <ResumesList />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
}; 