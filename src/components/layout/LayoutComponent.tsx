import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Contenido } from '../Content';
const { Header, Sider } = Layout;

const LayoutComponent = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout>
    <Sider trigger={null} collapsible collapsed={collapsed} style={{ minHeight: '100vh', margin: '0', padding: '0'}}>
      <div className="demo-logo-vertical" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={['1']}
        items={[
          {
            key: '1',
            icon: <UserOutlined />,
            label:  <Link to='/'>Dashboard</Link>,
          },
          {
            key: '2',
            icon: <VideoCameraOutlined />,
            label: <Link to='/reportes'>Reportes</Link>,
          },
          {
            key: '3',
            icon: <UploadOutlined />,
            label: <Link to='/config'>Configuracion</Link>,
          },
        ]}
      />
    </Sider>
    <Layout>
      <Header style={{ padding: 0, background: colorBgContainer }}>
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
      </Header>
      <Contenido />
    </Layout>
  </Layout>
  )
}
export default LayoutComponent
