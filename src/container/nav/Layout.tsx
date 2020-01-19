//about.js
import React, {Component} from 'react';
import {Breadcrumb, Icon, Layout, Menu} from "antd";
import Routers from '../../router/router';
// @ts-ignore
import {BrowserRouter, NavLink} from "react-router-dom";
//const { Header, Content, Footer, Sider } = Layout;
const {Header, Content, Sider} = Layout;
const {SubMenu} = Menu;
export default class About extends Component {
    render() {
        return (
            <BrowserRouter>
                <Layout>
                    <Header className="header">
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            style={{lineHeight: '64px'}}
                        >
                            <Menu.Item key="1">nav 1</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Layout>
                        <Sider width={200} style={{background: '#fff'}}>
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{height: '100%', borderRight: 0}}
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="user"/>
                                            subnav 1
                                        </span>
                                    }
                                >
                                    <Menu.Item key="1"><NavLink to="/home">1</NavLink></Menu.Item>
                                    <Menu.Item key="2"><NavLink to="/about">2</NavLink></Menu.Item>
                                    <Menu.Item key="3">option3</Menu.Item>
                                    <Menu.Item key="4">option4</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                            <Icon type="laptop"/>
                                            subnav 2
                                        </span>
                                    }
                                >
                                    <Menu.Item key="5">option5</Menu.Item>
                                    <Menu.Item key="6">option6</Menu.Item>
                                    <Menu.Item key="7">option7</Menu.Item>
                                    <Menu.Item key="8">option8</Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub3"
                                    title={
                                        <span>
                                            <Icon type="notification"/>
                                            subnav 3
                                        </span>
                                    }
                                >
                                    <Menu.Item key="9">option9</Menu.Item>
                                    <Menu.Item key="10">option10</Menu.Item>
                                    <Menu.Item key="11">option11</Menu.Item>
                                    <Menu.Item key="12">option12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Sider>
                        <Layout style={{padding: '0 24px 24px'}}>
                            <Breadcrumb style={{margin: '16px 0'}}>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item>List</Breadcrumb.Item>
                                <Breadcrumb.Item>App</Breadcrumb.Item>
                            </Breadcrumb>
                            <Content
                                style={{
                                    background: '#fff',
                                    padding: 24,
                                    margin: 0,
                                    minHeight: 280,
                                }}
                            >
                                <Routers/>

                            </Content>
                        </Layout>
                    </Layout>
                </Layout>
            </BrowserRouter>
        )
    }
}