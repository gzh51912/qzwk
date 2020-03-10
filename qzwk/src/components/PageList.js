import React, { Component } from 'react';
import { Icon, Menu, Pagination } from 'antd';
import { withRouter } from 'react-router-dom'
import Head from './Head'
import '../scss/PageList.scss';
import 'antd/dist/antd.css';
import PublicFoot from './PublicFoot.js';
import axios from 'axios'

class PageList extends Component {
    constructor() {
        super();

        this.state = {
            list: [
                {
                    text: '全部',
                    type: 'all'
                    , id: 1
                },
                {
                    text: '文库精选',
                    type: 'choiceness'
                    , id: 2
                },
                {
                    text: '幻想',
                    type: 'fantasy'
                    , id: 3
                },
                {
                    text: '战斗',
                    type: 'battle'
                    , id: 4
                },
                {
                    text: '恋爱'
                    , id: 5
                },
                {
                    text: '搞笑'
                    , id: 6
                },
                {
                    text: '日常'
                    , id: 7
                },
                {
                    text: '校园'
                    , id: 8
                },
                {
                    text: '后宫'
                    , id: 9
                },
                {
                    text: '科幻'
                    , id: 10
                },
                {
                    text: '治愈'
                    , id: 11
                },
                {
                    text: '超能力'
                    , id: 12
                },
                {
                    text: '节操'
                    , id: 13
                },
                {
                    text: '妖怪'
                    , id: 14
                },
                {
                    text: '恐怖'
                    , id: 15
                },
                {
                    text: '妹控'
                    , id: 16
                },
                {
                    text: '伪娘'
                    , id: 17
                },
                {
                    text: '魔法少女'
                    , id: 18
                },
                {
                    text: '乙女'
                    , id: 19
                },
                {
                    text: '百合'
                    , id: 20
                },
                {
                    text: '偶像'
                    , id: 21
                },
                {
                    text: '悬疑'
                    , id: 22
                }
            ],
            jiashuju: [
                {
                    id: 1,
                    bookname: ''
                }
            ]
        }
        this.go = this.go.bind(this)
        this.gopush = this.gopush.bind(this)

    }
    componentDidMount() {
        axios.get('http://118.190.52.161:8100/a?id=1')
            .then((res) => {
                this.setState({
                    jiashuju: res.data.item.arr
                })
            })
    }
    go(id) {
        axios.get('http://118.190.52.161:8100/a?id=' + id)
            .then((res) => {
                this.setState({
                    jiashuju: res.data.item.arr
                })
            })
    }
    gopush(id) {
        this.props.history.push('/Detail/' + id)
    }
    render() {
        console.log(this.state.jiashuju);

        return (
            <>
                <Head></Head>
                <div>
                    <div id="pagelist" >
                        <h2>
                            <div><span className="square"></span>分类检索</div>
                            <div className="changetype">
                                <Icon type="appstore" />
                                <Icon type="database" />
                            </div>
                        </h2>
                        {/* <ul className="list">
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <li>
                                        <Button type="primary" shape="round" >
                                            {item.text}
                                        </Button>
                                    </li>
                                )
                            })
                        }
                    </ul> */}
                        <Menu
                            className="list"
                            style={{ width: "100%" }}
                            defaultSelectedKeys={['0']}
                        // mode={this.state.mode}
                        // theme={this.state.theme}
                        >
                            {
                                this.state.list.map((item, index) => {
                                    return (
                                        <Menu.Item key={index} onClick={this.go.bind(null, item.id)}>
                                            {item.text}
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                        <ul className="fictionlist">
                            {
                                this.state.jiashuju.map((item) => {
                                    return (
                                        <li key={item.id}  >
                                            <img src={item.images} alt="" />
                                            <p className="title">{item.bookname}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <Pagination defaultCurrent={6} total={500} />
                    </div>
                    <PublicFoot />
                </div>
            </>
        )
    }
}
PageList = withRouter(PageList)
export default PageList;