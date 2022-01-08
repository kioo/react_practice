import React, { Component } from 'react'
import {Layout} from 'antd'
import 'antd/dist/antd.css'
import './App.css'

import ListAnt from './components/ListAnt'
import SearchAnt from './components/SearchAnt';


export default class App extends Component {
	
	state = {
		users:[],
		isFirst:true,
		isLoding: false,
		err:'',
	}
	
	updateAppState = (stateObj) =>{
		this.setState(stateObj)
	}
	
	render() {
		const { Header, Footer, Sider, Content } = Layout;

		return (
			<div>
				<Layout>
					<Header>GitHub用户名查询系统</Header>
					<Layout>
						<Sider>Sider</Sider>
						<Content>
							<SearchAnt updateAppState={this.updateAppState}/>
							<ListAnt {...this.state}/>
						</Content>
					</Layout>
					<Footer>无版权</Footer>
				</Layout>
			</div>
		)
	}
}
