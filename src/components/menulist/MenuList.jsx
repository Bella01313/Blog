import React from 'react';
import {Link} from 'react-router-dom'
import { Menu } from 'antd';
import {HomeOutlined, PlusCircleOutlined, DeleteOutlined, LogoutOutlined} from '@ant-design/icons';
const MenuList = ({darkTheme}) => {
  return (
    <>
    <Menu theme={darkTheme? 'light':'dark'} mode="inline" className="menu-bar">
    <Link className="link" to="/">
        <Menu.Item key="home" icon={<HomeOutlined/>}>
            Home
        </Menu.Item>
        </Link>
        <Link className="link" to="/write">
        <Menu.Item key="plus" icon={<PlusCircleOutlined/>}>
            Create
        </Menu.Item>
        </Link>
        <Link className="link" to="/delete">
        <Menu.Item key="delete" icon={<DeleteOutlined/>}>
            Delete
        </Menu.Item>
        </Link>
    </Menu>
    </>
  )
}

export default MenuList