import React, { Component } from 'react'
import {List,Avatar} from 'antd'

export default class ListAnt extends Component {
    render() {
        const {users,isLoading,err} = this.props
        return (
            <List
                loading={isLoading}
                itemLayout='horizontal'
                dataSource={users}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar src= {item.avatar_url}/>}
                          title={<a href={item.html_url}>{item.login}</a>}
                        />
                    </List.Item>
                )}
            />
        )
    }
}
