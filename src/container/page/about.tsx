//about.js
import Button from 'antd/es/button';
import React, { Component } from 'react';

export default class About extends Component {
    render() {
        return (<h1>
            欢迎，这里是About
            <Button type="primary">Button</Button>
        </h1>)
    }
}