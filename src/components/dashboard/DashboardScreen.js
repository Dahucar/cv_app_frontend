import React, { useState } from "react";
import "../../index.css";
import "antd/dist/antd.css";
import { Layout, Typography } from "antd";
import { Route, Switch } from "react-router-dom";

// views component
import { DashboardNavigate } from "./DashboardNavigate";
import { ExperienceScreen } from "./views/ExperienceScreen";
import { SkillsScreen } from "./views/SkillsScreen";
import { EducationScreen } from "./views/EducationScreen";
import { OtherScreen } from "./views/OtherScreen";
import { ResumesScreen } from "./views/ResumesScreen";
import { useSelector } from "react-redux";

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

export const DashboardScreen = () => {
  const { user } = useSelector(state => state.auth);
  const [state, setState] = useState(false);
  const handleCollapse = () => { setState( !state ); };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={ state } onCollapse={handleCollapse}>
        <div className="logo" />
        <DashboardNavigate/>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} >
          <Title level={3} style={{ color: 'white', lineHeight: '60px', marginLeft: '15px' }}>
            Welcome back { user.name }
          </Title>
        </Header>
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Switch>
              <Route exact path="/dashboard" component={ ResumesScreen } />
              <Route exact path="/dashboard/experience" component={ ExperienceScreen } />
              <Route exact path="/dashboard/skills" component={ SkillsScreen } />
              <Route exact path="/dashboard/education" component={ EducationScreen } />
              <Route exact path="/dashboard/other" component={ OtherScreen } />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center', background: '#ccc' }}>By Dahucar &copy; 2021</Footer>
      </Layout>
    </Layout>
  );
}; 