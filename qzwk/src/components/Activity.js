import React, { Component } from 'react';
import PublicFoot from './PublicFoot.js';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import Head from './Head'
import '../scss/activity.scss';

class Activity extends Component {
    constructor() {
        super();
        this.state = {
            list: [
                {
                    title: "2019新人赏",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_73f9ce9ad576118a6321a8cc05019bc6.jpg",
                    date: "2019-12-05 12:39"
                },
                {
                    title: "约会大作战",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_63d374d2e177c6fe9f7a9ac3313c4051.jpg",
                    date: "2019-11-21 19:50"
                },
                {
                    title: "时光之约-无尽白银之械三部曲收官之作",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_4a4ac935f0800cce55df47d142a3fb9b.jpg",
                    date: "2019-11-21 17:28"
                },
                {
                    title: "11.11限定福利",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_5f5e311a8724d64e89ad603901701ddf.jpg",
                    date: "2019-11-08 20:58"
                },
                {
                    title: "初音未来 物语音乐企划征集",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_417fda244b03a7344f4733575e103375.jpg",
                    date: "2019-09-23 11:26"
                },
                {
                    title: "明日方舟同人小说征集计划",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_71f77c6e6a4d75f01e3c11ecacb47028.jpg",
                    date: "2019-08-06 13:36"
                },
                {
                    title: "创想物语大赏2nd",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_fc8f8bff6110060bf8051dfd953e4097.jpg",
                    date: "2019-06-21 16:12"
                },
                {
                    title: "薇汐-记《无尽白银之械》薇汐",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_2f85c09869ae5ebfb2cb7a569f0c2653.jpg",
                    date: "2019-02-28 15:28"
                },
                {
                    title: "第一回“帽子精”杯 写作用BGM歌单分享大会",
                    image_url: "https://rin.linovel.net/v3_activity/4_9a909ae8e06e505f0badadf8f16e3e35.png",
                    date: "2019-01-31 16:26"
                },
                {
                    title: "第三回轻之文库轻小说新人赏",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_227c4d6d9c55d236dae102a68befa975.png",
                    date: "2018-12-15 15:45"
                },
                {
                    title: "写游戏评论1/4平方米的星空 拿1888轻币",
                    image_url: "https://rin.linovel.net/v3_activity/1048291_f624114e87e79f5ebfa1ee54eb611f4c.jpg",
                    date: "2018-11-07 15:46"
                },
                {
                    title: "《李泰和方小甜的平行世界》同人征文 结果公布",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_34d1997d804a005f0e848bdb4be5cced.jpg",
                    date: "2018-11-01 11:38"
                },
                {
                    title: "第一届“帽子精”杯 书评大赏",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_375379b8e7c28de1cce86bb10e639bcc.jpg",
                    date: "2018-09-19 17:01"
                },
                {
                    title: "《李泰方小甜的平行世界》同人征文",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_a3d09cfbb205129139b00dc31d12e4f1.jpg",
                    date: "2018-09-18 11:49"
                },
                {
                    title: "《永远的7日之都》原创剧本征文",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_93d303febf8ddd0bf801c23ceda6c54b.jpg",
                    date: "2018-08-06 11:05"
                },
                {
                    title: "史上最萌国家队-世界杯晋级预测",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_5509cb25eaade08b3b183b9eba612164.jpg",
                    date: "2018-07-31 16:29"
                },
                {
                    title: "2018轻之文库创想物语大赏1st",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_fc82553bc253324339c46f280cb1b4d7.jpg",
                    date: "2018-07-20 14:09"
                },
                {
                    title: "迎世界杯~轻库娘足球宝贝出道啦~",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_ab1e477359e6718488ffc6f5cf3c0be1.jpg",
                    date: "2018-07-17 11:45"
                },
                {
                    title: "愚人节特别番外短篇",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_91c3286481c27112ed8f487ebd72f49b.jpg",
                    date: "2018-04-01 00:27"
                },
                {
                    title: "「樱色の奇迹」3月征文",
                    image_url: "https://rin.linovel.net/v3_activity/4_bfd268476dd407b22cf84bd04bd9c646.png",
                    date: "2018-03-13 14:02"
                },
                {
                    title: "双11应援福利活动",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_1e8731a4731112577bfd391472b44c65.jpg",
                    date: "2017-11-01 18:49"
                },
                {
                    title: "新人赏期间限定活动 — 参与新人赏书评 赚取限定奖励",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_9a19f3004b59f0a95c0243ec5211f6b8.jpg",
                    date: "2017-07-19 17:56"
                },
                {
                    title: "第二回轻之文库新人赏",
                    image_url: "https://rin.linovel.net/v3_activity/1009019_0372d5acd7489e42aba0e4f30daaadff.jpg",
                    date: "2017-07-19 17:48"
                },
                {
                    title: "征文活动·盛夏最凶都市传说",
                    image_url: "https://rin.linovel.net/attachment/event/4_591c1fcb3e54c_1495015371.jpg",
                    date: "2017-05-17 18:02"
                },
                {
                 
                    title: "「 少女咖啡枪 」评论有奖活动",
                    image_url: "https://rin.linovel.net/attachment/event/4_58eb1f4203377_1491803970.jpg",
                    date: "2017-04-10 13:52"
                }
            ],
            showlist: []
        }
        this.changepage = this.changepage.bind(this);
    }

    changepage(page, pageSize) {
        let { showlist, list } = this.state
        showlist = list.slice((page - 1) * 20, page * 20);
        this.setState({
            showlist: showlist.map(item => item)
        })
    }

    componentDidMount() {
        let { showlist, list } = this.state;
        showlist = list.slice(0, 20);
        this.setState({
            showlist
        })
    }

    render() {
        let { showlist } = this.state;
        return (
            <>
                <Head></Head>
                <div style={{ backgroundColor: "#f5f5f5", overflow: "hidden" }} >
                    <p className="notice">
                        <a href="###">轻之文库整改公告</a>
                    </p>
                    <div id="activity">
                        <ul className="activity">
                            {
                                showlist.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <div className="img">
                                                <img src={item.image_url} alt="" />
                                            </div>
                                            <div className="content">
                                                <p className="title">{item.title}</p>
                                                <p className="date">{item.date}</p>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <Pagination defaultCurrent={1} total={25} defaultPageSize={20} onChange={this.changepage} />
                    </div>
                    <PublicFoot />
                </ div >
            </>
        )
    }
}

export default Activity;