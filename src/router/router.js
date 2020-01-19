//引入react jsx写法的必须
import React from 'react';
import about from '../container/page/about';
import home from '../container/page/home';
//import sidebar from '../container/nav/sidebar';
//引入需要用到的页面组件
//import About from '../container/page/about';
//引入一些模块
//import { BrowserRouter as Router, Route,Redirect} from "react-router-dom";
import {Route,Redirect} from "react-router-dom";
function router(){
    return (
        <Route>
            <Redirect path="/" to="/about"/>
            <Route path="/about" component={about}/>
            <Route path="/home" component={home}/>
        </Route>
            );
}

export default router;