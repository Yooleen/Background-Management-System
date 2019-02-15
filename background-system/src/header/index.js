import React, { Component } from 'react';
import './index.css'
class Header extends Component{
  render(){
    return(
      <div className="container">
        <div className="header">
          <div className="net-logo">
            <img src="https://img.alicdn.com/tfs/TB1ttMyGOLaK1RjSZFxXXamPFXa-100-100.jpg" alt="" className="logo"/>
            <span className="net-name">试试底的后台管理</span>
          </div>
          <img src="https://img.alicdn.com/tfs/TB1tTk4tpkoBKNjSZFEXXbrEVXa-40-40.png" alt="" className="catalog"/>
          <div className="search">
            <input type="text" className="search-k"/>
            <img src="https://img.alicdn.com/tfs/TB1cGEeGMDqK1RjSZSyXXaxEVXa-200-200.png" alt="" className="search-img"/>
          </div>
          <div>
            <img src="https://img.alicdn.com/tfs/TB1SAgOGNnaK1RjSZFBXXcW7VXa-200-200.png" alt=""/>
            <p className="notice">系统公告</p>
          </div>
          <div className="user-infos">
            <img src="https://img.alicdn.com/tfs/TB1Y613GNjaK1RjSZFAXXbdLFXa-200-200.jpg" alt="" className="header-img"/>
            <p className="username">Yooleen</p>
          </div>
        </div>
      </div>
    )
  }
}
export default Header