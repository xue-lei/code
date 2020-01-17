//引入react jsx写法的必须
import React from 'react';
import about from '../container/page/about';
import home from '../container/page/home';
import sidebar from '../container/nav/sidebar';
//引入需要用到的页面组件
//import About from '../container/page/about';
//引入一些模块
import { BrowserRouter as Router, Route} from "react-router-dom";
function router(){
    return (
        <Router>
            <Route path="/" component={sidebar} />
            <Route path="/home" component={home} />
            <Route path="/about" component={about} />
        </Router>
            );
}

export default router;