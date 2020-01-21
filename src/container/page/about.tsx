//about.js
import React, { Component } from 'react';
import {Menu, Icon, Layout} from 'antd';
// @ts-ignore
import {Route,Redirect,BrowserRouter, NavLink} from "react-router-dom";
import a from "./about/a"
import b from "./about/b"
const { SubMenu } = Menu;
const {Content,Sider} = Layout;

export default class About extends Component {
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    state = {
        openKeys: ['sub1'],
    };

    onOpenChange = (openKeys: any[]) => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : [],
            });
        }
    };
    render() {
        return (
            <BrowserRouter>
            <Layout>
                <Sider width={257}>
            <Menu
            mode="inline"
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            style={{ width: 256 }}
        >
            <SubMenu
                key="sub1"
                title={
                    <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
                }
            >
                <Menu.Item key="1"><NavLink to={"/about/1"}>1</NavLink></Menu.Item>
                <Menu.Item key="2"><NavLink to={"/about/2"}>2</NavLink></Menu.Item>
                <Menu.Item key="3">Option 3</Menu.Item>
                <Menu.Item key="4">Option 4</Menu.Item>
            </SubMenu>
            <SubMenu
                key="sub2"
                title={
                    <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
                }
            >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu
                key="sub4"
                title={
                    <span>
              <Icon type="setting" />
              <span>Navigation Three</span>
            </span>
                }
            >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
            </SubMenu>
        </Menu>
                </Sider>
                <Content>

                    <Route>
                    <Redirect path={"/about"} to={"/about/1"} />
                    <Route path={"/about/1"} component={a}/>
                    <Route path={"/about/2"} component={b}/>
                    </Route>
                </Content>
            </Layout>
            </BrowserRouter>
        )
    }
}