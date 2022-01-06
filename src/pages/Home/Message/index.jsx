import React, { Component } from 'react'
import { Route,Link } from 'react-router-dom'

import Detail from './Detail'

export default class Message extends Component {
    state = {
        messageArr:[
            {id:'01',title:'消息1'},
            {id:'02',title:'消息2'},
            {id:'03',title:'消息3'},
        ]
    }

    replaceShow = (id,title)=>{
        this.props.history.replace(`/home/message/detail`,{id,title})
    } 
    pushShow = (id,title)=>{
        this.props.history.push(`/home/message/detail`,{id,title})
    }

    render() {
        const {messageArr} = this.state
        console.log("detail",this.state)
        return (
            <div>
                <ul>
                    {
                        messageArr.map((msgObj)=>{
                            return (
                                <li key={msgObj.id}>
                                    {/* 向路由传递search参数 */}
                                    <Link to={{pathname:'/home/message/detail',state:{id:msgObj.id,title:msgObj.title}}}>{msgObj.title}</Link>
                                    &nbsp;<button onClick={()=>this.replaceShow(msgObj.id,msgObj.title)}>replace查看</button>
                                    &nbsp;<button onClick={()=>this.pushShow(msgObj.id,msgObj.title)}>push查看</button>
                                </li>
                            )
                        })
                    }
                </ul>
                <hr/>
                <Route path="/home/message/detail" component={Detail}/>
            </div>
        )
    }
}