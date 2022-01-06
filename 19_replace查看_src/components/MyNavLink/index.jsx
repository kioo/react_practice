import React, { Component } from 'react'
import { NavLink} from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        return (
            <div>
                {/* 使用   ... 解构 props 对象到当前标签的属性中，包括value值 */}
                <NavLink activeClassName="atguigu" className="list-group-item" {...this.props}/>
            </div>
        )
    }
}
