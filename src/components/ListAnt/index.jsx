import React, { Component } from 'react'
import {List,Avatar} from 'antd'

export default class ListAnt extends Component {
    render() {
        const data = [
            {title:'Racing car sprays burning fuel into crowd.',description:"miaoshu1"},
            {title:'Japanese princess to wed commoner.',description:"miaoshu2"},
            {title:'Australian walks 100km after outback crash.',description:"miaoshu3"},
            {title:'Man charged over missing wedding girl.',description:"miaoshu4"},
            {title:'Los Angeles battles huge wildfires.',description:"miaoshu5"},
          ];

        return (
            <List
                itemLayout='horizontal'
                dataSource={data}
                renderItem={item => (
                    <List.Item>
                        <List.Item.Meta
                          avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}
                          title={<a href="https://ant.design">{item.title}</a>}
                          description={item.description}
                        />
                    </List.Item>
                )}
            />
        )
    }
}
