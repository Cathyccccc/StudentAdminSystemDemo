import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <NavLink className="navbar-brand" to='/'>学生管理系统</NavLink>
        </div>
        <ul className="nav navbar-nav">
          <li><NavLink to='/home'>主页</NavLink></li>
          <li><NavLink to='/about'>关于我们</NavLink></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><NavLink to='/add'>新增学生</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}
