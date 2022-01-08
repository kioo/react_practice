import React, { Component } from 'react'
import { Input,Space } from 'antd'
import { AudioOutlined } from '@ant-design/icons';
import axios from 'axios';

export default class SearchAnt extends Component {

    onSearch = (value) => {
		console.log(value)
        this.props.updateAppState({isLoading:true})
        axios.get(`https://api.github.com/search/users?q=${value}`).then(
            response => {
                console.log(response)
                this.props.updateAppState({isLoading:false,users:response.data.items})
            },
            error => {
                console.log(error)
                this.props.updateAppState({isLoading:false,err:error.message})
            }
        )
	}

    render() {
        const { Search } = Input;
        const suffix = (
            <AudioOutlined
                style={{
                    fontSize: 16,
                    color: '#1890ff',
                }}
            />)

        return (
            <Space>
					<Search placeholder="请输入人名进行查询" enterButton="Search" allowClear onSearch={this.onSearch} suffix={suffix} style={{ width: 400 }} />
			</Space>
        )
    }
}
