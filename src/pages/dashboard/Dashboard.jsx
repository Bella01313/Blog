import React, { useState } from 'react'
import {Button, Layout, theme} from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import Sider from 'antd/es/layout/Sider';
import Logo from '../../components/logo/Logo';
import MenuList from '../../components/menulist/MenuList';
import ToggleTheme from '../../components/toggletheme/ToggleTheme';
const {Header,Sidebar} = Layout;

function Dashboard() {
    const[darkTheme, setDarkTheme] = useState(true);
    const[collapsed, setCollapsed] = useState(false);
    const toggleTheme = () => {
        setDarkTheme(!darkTheme)};
   const {
    token:{colorBgContainer} ,
    } = theme.useToken();
  return (
    <>
       <Layout>
        <Sider collapsed={collapsed} collapsible trigger={null} theme={darkTheme? 'light':'dark'}className="sidebar" >
            <Logo/>
            <MenuList darkTheme={darkTheme}/>
            <ToggleTheme darkTheme={darkTheme} toggleTheme={toggleTheme}/>
        </Sider>
        <Layout>
            <Header style={{padding: 0, background:colorBgContainer}}>
                <Button type="text" className="toggle"
                onClick={ () =>setCollapsed(!collapsed)}
                icon={collapsed? <MenuUnfoldOutlined/> :<MenuFoldOutlined/> } />
            </Header>
        </Layout>
        </Layout> 
        </>
  )
}

export default Dashboard