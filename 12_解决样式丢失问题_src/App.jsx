import React, { Component } from 'react'
import {Route,Switch} from 'react-router-dom'


import Home from './pages/Home'
import About from './pages/About'
import Test from './pages/Test'
import Header from './components/Header'
import MyNavLink from './components/MyNavLink'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<Header/>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">

							{/* 原生html中，靠<a>跳转不同的页面 */}
							{/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

							{/* 在React中靠路由链接实现切换组件--编写路由链接 */}
							<MyNavLink to="/atguigu/about">About</MyNavLink>
							<MyNavLink to="/atguigu/home">Home</MyNavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 注册路由,使用 switch 组件可以避免同时显示多个组件 */}
								<Switch>
									<Route path="/atguigu/about" component={About}/>
									<Route path="/atguigu/home" component={Home}/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
