//引入react jsx写法的必须
import React from 'react';
//引入需要用到的页面组件
import Home from '../container/page/home';
import About from '../container/page/about';
//引入一些模块
import { BrowserRouter as Router, Route} from "react-router-dom";
function router(){
    return (
        <Router path="/" component={Home}>
            <Route path="/home" component={Home} />
            <Route path="/about" component={About} />
        </Router>);
}

export default router;