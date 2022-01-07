import React, { Component } from 'react'
import { Input, Space } from 'antd'
import 'antd/dist/antd.css'
import { AudioOutlined } from '@ant-design/icons';
import ListAnt from './components/ListAnt'

const { Search } = Input;

export default class App extends Component {


	onSearch = (value) => {
		console.log(value)
	}
	render() {
		const suffix = (
			<AudioOutlined
				style={{
					fontSize: 16,
					color: '#1890ff',
				}}
			/>)

		return (
			<div>
				<Space>
					<Search placeholder="请输入人名进行查询" enterButton="Search" allowClear onSearch={this.onSearch} suffix={suffix} style={{ width: 400 }} />
				</Space>
				<ListAnt/>
			</div>
		)
	}
}
