//about.js
import React, { Component } from 'react';
// @ts-ignore
import { Link } from "react-router-dom";
export default class About extends Component {
    render() {
        return (<div>
           <ul>
               <li><Link to="/about">About</Link></li>
               <li><Link to="/home">Home</Link></li>
               <li></li>
           </ul>
        </div>)
    }
}