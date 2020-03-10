import React, { Component } from 'react'
import Head from './Head'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import PublicFoot from './PublicFoot'
class Rankinglist extends Component {
    constructor() {
        super()
        this.state = {
            actins: '周排行',
            actins2: "重推榜",
            navs: [{ name: '周排行' }, { name: '月排行' }, { name: '新生排行' }],
            nav2: [{ name: '重磅榜' }, { name: '佳作榜' }, { name: '月票榜' }, { name: '轻币榜' }, { name: '墨水榜' }, { name: '应援榜' }],
            api: [{ arr: [] }],
            num: 0,
            nums: 1,
            isoko: false
        }
        this.actin = this.actin.bind(this)
        this.actin2 = this.actin2.bind(this)
    }
    actin(xc) {
        // this.props.history.push(path);
        this.setState({
            actins: xc
        })
    }
    actin2(xc) {
        let { name, index } = xc
        this.setState({
            actins2: name,
            num: index
        })
    }
    componentDidMount() {
        axios.get('http://118.190.52.161:8100/nei')
            .then((res) => {
                this.setState({
                    api: res.data
                })
            })
        window.addEventListener('scroll', this.handleScroll.bind(this)) //监听滚动
    }
    componentWillUnmount() {
        //一定要最后移除监听器，以防多个组件之间导致this的指向紊乱
        window.removeEventListener('scroll', this.handleScroll.bind(this))
    }
    handleScroll = e => {
        // console.log(
        //     '浏览器滚动事件',
        //     e.srcElement.scrollingElement.scrollTop,
        //     e.srcElement.scrollingElement.scrollHeight
        // )
        var wScrollY = e.srcElement.scrollingElement.scrollTop; // 当前滚动条位置  
        var wInnerH = window.innerHeight; // 设备窗口的高度（不会变）  
        var bScrollH = document.body.scrollHeight; // 滚动条总高度    
        if (wScrollY + wInnerH >= bScrollH) {
            if (this.state.nums < 4) {
                console.log(this.state.nums);
                let page = { page: this.state.nums }
                axios.post('http://118.190.52.161:8100/cc', page)
                    .then((res) => {
                        let newarr = this.state.api
                        newarr[this.state.num].arr = newarr[this.state.num].arr.concat(res.data.data)
                        this.setState({
                            api: newarr,
                            nums: this.state.nums + 1
                        })
                    })
            }
        }

    }
    // if (e.srcElement.scrollingElement.scrollTop >= document.body.clientHeight - 18) {
    //     console.log('到底了', document.body.clientHeight - 18);



    //e.srcElement.scrollingElement.scrollTop为距离滚动条顶部高度
    // e.srcElement.scrollingElement.scrollHeight为整个文档高度
    render() {
        return (
            <>
                <Head></Head>
                <ul className="fentou">
                    {this.state.navs.map(item => {
                        return <li key={item.name} className={this.state.actins === item.name ? 'activity' : null} onClick={this.actin.bind(null, item.name)}>
                            <p>{item.name}</p>
                            <i></i>
                        </li>
                    })}
                </ul>
                <div className="content">
                    <ul className="cont-left">
                        {this.state.api.map((item, index) => {
                            return <li key={index} className={this.state.actins2 === item.title ? 'checked' : null} onClick={this.actin2.bind(null, { name: item.title, index })}>
                                {item.title}
                            </li>
                        })}
                    </ul>
                    <ul className="cont-right">
                        {this.state.api[this.state.num].arr.map((item, index) => {
                            return <li key={index}>
                                <img src={item.images} alt="" />
                                <div>
                                    <p><span>{item.title}</span><span className="greng">{item.rank_number}</span></p>
                                    <p>{item.author}</p>
                                    <p>{item.works_info}</p>
                                    <p><span>{item.works_tags}</span><span>{item.works_tags1}</span><span>{item.works_hot}</span></p>
                                </div>
                            </li>
                        })}
                    </ul>
                </div>
                <PublicFoot />
            </>
        )
    }
}
Rankinglist = withRouter(Rankinglist)
export default Rankinglist;