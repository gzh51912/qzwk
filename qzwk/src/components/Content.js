import React, { Component } from 'react';
import { Breadcrumb, Radio, message } from 'antd';

import PublicFoot from './PublicFoot';
import 'antd/dist/antd.css';
import '../scss/content.scss';
import axios from 'axios';
import Head from './Head'

class Content extends Component {
    constructor() {
        super();
        this.state = {
            html: [],
            author: "令狐千血",
            name: "逆天嫡女：狂傲太子妃",
            xie: 1,
            xie2: 2,
            xie3: 3,
            num: 1
        }
        this.changepage = this.changepage.bind(this);
    }

    async componentDidMount() {
        let { name } = this.props.match.params
        console.log(name)
        let result = await axios.post('http://118.190.52.161:8100/ne', { name, num: 1 });
        console.log(result.data)
        if (result.data.data.length) {
            let { author, biaoti, zhangjie, timu, neirong } = result.data.data[0]
            console.log(neirong);
            let contexts = neirong.split('\r\n\r\n')
            this.setState({
                author: author,
                name: zhangjie,
                xie: timu,
                xie2: biaoti,
                xie3: zhangjie,
                html: contexts
            })
        }
    }

    async changepage(num) {
        let result = await axios.post('http://118.190.52.161:8100/ne', { name: this.state.xie, num: num });
        if (result.data.data.length) {
            let { author, biaoti, zhangjie, timu, neirong } = result.data.data[0]
            let contexts = neirong.split('\r\n\r\n')
            this.setState({
                author: author,
                name: zhangjie,
                xie: timu,
                xie2: biaoti,
                xie3: zhangjie,
                html: contexts,
                num: num
            })
            window.scrollTo(0, 0);
        } else if (num > this.state.num) {
            message.info('没有下一章了');
        } else {
            message.info('没有上一章了');
        }
    }

    render() {
        console.log(this.props.match.params);

        return (
            <>
                <Head></Head>
                <div id="content">
                    <div className="path">
                        <Breadcrumb>
                            <Breadcrumb.Item>{this.state.xie}</Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href="">{this.state.xie2}</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>{this.state.xie3}</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div id="main">
                        <h2>{this.state.name}</h2>
                        <p className="author">作者: <span>{this.state.author}</span></p>
                        <div id="text">
                            {this.state.html.map((item, index) => {
                                return <p key={index}>{item}</p>
                            })}
                        </div>
                        <Radio.Group size="large" onChange={this.handleSizeChange} style={{ width: "100%", textAlign: "center" }}>
                            <Radio.Button value="prev" onClick={this.changepage.bind(null, this.state.num - 1)}>上一章</Radio.Button>
                            <Radio.Button value="next" style={{ backgroundColor: "#00a786", color: "#fff" }} onClick={this.changepage.bind(null, this.state.num + 1)}>下一章</Radio.Button>
                        </Radio.Group>
                    </div>
                    <PublicFoot />
                </div>
            </>
        )
    }
}

export default Content;