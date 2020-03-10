import React from 'react'
import { Component } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
class Content extends Component {
    constructor() {
        super()
        this.state = {
            links: [
                { imgs: require('../../images/book_icon.png'), name: '分类', path: '/pagelist' },
                { imgs: require('../../images/calendar_icon.png'), name: '活动', path: '/activity' },
                { imgs: require('../../images/trophy_icon.png'), name: '新人赏', path: '/new' },
                { imgs: require('../../images/pen_icon.png'), name: '签约', path: '/sign' }
            ],
            api: [
                {
                    "id": 105549,
                    "name": "攻略宫城小姐的恋爱计划",
                    "cover": "/cover/20190802/105549_0_0a96fdea7ba13ace6b61a3c7ab67ae23.jpg",
                    "author": "凪",
                    "about": "我叫羽岛刹那，我现在慌的一批，是这样的，有个妹子刚才扇了我一巴掌，我却对她动心了，请问这是病么？\n什么？抖M，讨厌啦~我才不是抖M，只是碰巧喜欢那个妹子对我动粗的感觉~\n于是，我打算对那位妹子发起积极攻势，总而言之，先讨好她，让她娇羞，再来......\n咳咳咳！有点太猛烈了......\n不过，虽然我很喜欢宫城小姐啦，可总觉得宫城小姐有什么秘密瞒着我？\n就在某一天，当我看到宫城小姐在我面前......",
                    "hot": "271.3万",
                    "supp": "15.2万",
                    "words": "114.3万",
                    "desc": "",
                    "coverUrl": "https://rin.linovel.net/cover/20190802/105549_0_0a96fdea7ba13ace6b61a3c7ab67ae23.jpg!min300jpg",
                    "avatarUrl": "https://avatar.linovel.net/1091/1091178_1535194494.jpg!min140jpg"
                },
                {
                    "id": 102921,
                    "name": "我的英（退）雄（隐）时（生）代（活）",
                    "cover": "/cover/20200205/102921_0_16e91c585a8d46dac8998e5cb790f5aa.jpg",
                    "author": "王陵之秋",
                    "about": "那一年，我来到了这片大陆，凭借着无与伦比的天资与开挂的机缘，不久之后便以弱冠之龄登上了剑圣之座。哎？主角？错了、错了，你们看那边那个金头发的自恋狂，他才是这个故事的主人公。魔王？她在开头就退场了。至于后宫嘛......你觉得我这样的人形背景会有这种设定吗？！咳，总之，这是一个关于心灰意冷且胸无大志的剑圣的故事......",
                    "hot": "1415万",
                    "supp": "160.4万",
                    "words": "202.4万",
                    "desc": "",
                    "coverUrl": "https://rin.linovel.net/cover/20200205/102921_0_16e91c585a8d46dac8998e5cb790f5aa.jpg!min300jpg",
                    "avatarUrl": "https://avatar.linovel.net/1055/1055537_1505905359.jpg!min140jpg"
                },
                {
                    "id": 109756,
                    "name": "魔王大人的恶龙养成计划",
                    "cover": "/cover/20190620/109756_0_a772d5ed9911265758c6caacd8d0136e.jpg",
                    "author": "小也呀",
                    "about": "艾兰德：“艾丽莎，作为一只龙，只会卖萌可不行。”   艾丽莎：“喵喵喵？！？”   艾兰德：“听着艾丽莎，我要把你培养成世界第一恶龙。”   艾丽莎：“可是爸爸，我不用你培养已经是世界第一恶龙啦～”   艾兰德：“你确定是恶龙，不是饿龙？”   艾丽莎：“。。。。”    这是一个关于魔王奶爸与恶龙女儿之间爱与冒险的故事。（一切都要从蛋开始说起～） ",
                    "hot": "19.8万",
                    "supp": "1.8千",
                    "words": "4.4万",
                    "desc": "",
                    "coverUrl": "https://rin.linovel.net/cover/20190620/109756_0_a772d5ed9911265758c6caacd8d0136e.jpg!min300jpg",
                    "avatarUrl": "https://avatar.linovel.net/1125/1125486_1583143172.jpg!min140jpg"
                },
                {
                    "id": 109699,
                    "name": "新学院的魔女",
                    "cover": "/cover/20190614/109699_0_d345ff2ac6b32b5409a6b4d77c07bbf9.jpg",
                    "author": "文学少女！佐离酱！",
                    "about": "说到底，魔女这种生物，都是笨蛋，先不提其他的生命究竟是如何的，魔女从来都不是擅长平凡的家伙。\n规规矩矩是做不到的。\n只要身体里拥有着这样的血脉，那么就绝对会想要让自己发光发热。\n总会有那么几个人掀起波涛的。\n而在这当中，也必然会有几个做的过火的家伙。\n接下来，就是属于他们的故事。",
                    "hot": "9.9万",
                    "supp": 0,
                    "words": "23.7万",
                    "desc": "",
                    "coverUrl": "https://rin.linovel.net/cover/20190614/109699_0_d345ff2ac6b32b5409a6b4d77c07bbf9.jpg!min300jpg",
                    "avatarUrl": "https://avatar.linovel.net/142/142774_1546847181.jpg!min140jpg"
                },
                {
                    "id": 109734,
                    "name": "平凡棋紋的賢者之路",
                    "cover": "/cover/20190617/109734_0_799269144b5bf9299a1697ba9308ad93.jpg",
                    "author": "幻空楓",
                    "about": "不知是命運的安排還是人為的策劃，身為獸人族的少女——椛·H·愛音貝倫自小就生活在人族的城鎮。雖然因為其身份而被迫隱藏偽裝成人族，不過她並沒有因此而感到無助。對於從未見過的城外世界深感興趣，她本人也希望有朝一日可以踏出城門，將充滿色彩的曠闊世界盡收眼底。\n\n  然而…世界並沒有她想像得美好…\n\n  在她十五歲生日時，因為一場『因果』的意外找上門，結果不但失去了養育她的修女，連自己還被壞人擄走。在被囚禁關押的黑暗中不知過了多久，貪污腐敗讓她弱小的心靈逐漸走向崩潰，最終見識到人性腐敗的她也開始放棄了對世界的期望。\n\n  「這種噁心的世界還不如毀滅算了！」\n\n  就在她的精神和心靈達到極限時，她母親留下的『禮物』將她崩裂的心靈從黑暗的沼澤中帶回來，讓她再次振作並決定探索世界的美好。",
                    "hot": "8.1万",
                    "supp": 166,
                    "words": "5.5万",
                    "desc": "",
                    "coverUrl": "https://rin.linovel.net/cover/20190617/109734_0_799269144b5bf9299a1697ba9308ad93.jpg!min300jpg",
                    "avatarUrl": "https://avatar.linovel.net/1127/1127130_1557558464.jpg!min140jpg"
                },
                {
                    "id": 109721,
                    "name": "燃罪之炎",
                    "cover": "/default/2.jpg",
                    "author": "海月戏命师",
                    "about": "曾经有一人在使用某种力量的前提下，彻底将存在罪迹的人生轨迹抹杀掉，瞒过了世界与绝对客观法则。逃避了法律的正确制裁。\n某次，因为【档案夺回任务】的一次意外，导致了罗的人生轨迹上被无辜的刻上了一计沉重的罪孽。但他却逃脱与法律之外拥有自由之身。以此次意外为由，组织上头准备安排一次惩罚给他。但其结果并不是罗所希望的，这只是一次普通的在学园岛体验高中生活的机会。表示不愿意接受的他，被强制洗脑到此，甚至了忘记罪。\n但在这里邂逅到一位黑发少女之后，从而就如此毫无预料的卷入进一件席卷学园岛的神秘事件中……",
                    "hot": "20.7万",
                    "supp": "1.9万",
                    "words": "25.4万",
                    "desc": "",
                    "coverUrl": "https://rin.linovel.net/default/2.jpg!min300jpg",
                    "avatarUrl": "https://avatar.linovel.net/1130/1130893_1581918785.jpg!min140jpg"
                },
                {
                    "id": 109751,
                    "name": "魔王与女勇者们的恋爱录",
                    "cover": "/cover/20190822/109751_0_e7965c731ff7406940f8053658c5ec8e.jpg",
                    "author": "感情を失った孤独君",
                    "about": "我——长冢龙道，在今年要开始我的高中生活了。在这个对于我来说是多余的世界里，我只有老姐一个家人。父母的早死，让我变得冷漠；我不能在失去任何人了！一个电话，强硬的入读，被莫名其妙的证明为魔王。我的高中生活开始了……",
                    "hot": "20.7万",
                    "supp": 84,
                    "words": "15.4万",
                    "desc": "",
                    "coverUrl": "https://rin.linovel.net/cover/20190822/109751_0_e7965c731ff7406940f8053658c5ec8e.jpg!min300jpg",
                    "avatarUrl": "https://avatar.linovel.net/1130/1130700_1582681463.jpg!min140jpg"
                },
                {
                    "id": 104688,
                    "name": "以玄德之名",
                    "cover": "/cover/20190616/104688_0_b1f66b8b71cd2685950e99490f8954a6.jpg",
                    "author": "毅霖君",
                    "about": "如你所知，性转三国的烂俗题材。\n你想在里面发现什么呢？\n如果你觉得不会死人，错！\n如果你以为男主拿着剧本无敌，又错！\n如果你以为男主会开后宫，再错一次！\n那你写的什么？\n想知道？来试试呀。\n",
                    "hot": "463.1万",
                    "supp": "79.4万",
                    "words": "111.4万",
                    "desc": "",
                    "coverUrl": "https://rin.linovel.net/cover/20190616/104688_0_b1f66b8b71cd2685950e99490f8954a6.jpg!min300jpg",
                    "avatarUrl": "https://avatar.linovel.net/1085/1085921_1531651431.jpg!min140jpg"
                }
            ],
            apiname: [{ name: '全部', id: 1 }, { name: '校园', id: 2 }, { name: '恋爱', id: 3 }, { name: '幻想', id: 4 }, { name: '战斗', id: 5 }, { name: '搞笑', id: 6 }, { name: '日常', id: 7 }, { name: '后宫', id: 8 }],
            api2: [{ id: 1 }],
            num: '全部'
        }
        this.links = this.likns.bind(this)
        this.lisits = this.lisits.bind(this)
    }
    likns(path) {
        this.props.history.push(path)
    }
    componentDidMount() {
        
        axios.get('http://118.190.52.161:8100/a?id=1')
            .then((res) => {
                this.setState({
                    api2: res.data.item.arr
                })
            })
            .catch((err) => console.log(err));

    }
    lisits(obj) {
        let { id, name } = obj
        axios.get('http://118.190.52.161:8100/a?id=' + id)
            .then((res) => {
                this.setState({
                    api2: res.data.item.arr,
                    num: name
                })
            })
            .catch((err) => console.log(err));
    }
    render() {
        return (
            <>
                <ul className="nav">
                    <div className="w">
                        {this.state.links.map(item => {
                            return <li key={item.name} onClick={this.links.bind(null, item.path)}><img src={item.imgs} alt={item.name + 1} />{item.name}</li>
                        })}
                        {/* <li><img src="../src/images/book_icon.png" alt="">分类</li>
            <li><img src="../src/images/book_icon.png" alt="">活动</li>
            <li><img src="../src/images/book_icon.png" alt="">新人赏</li>
            <li><img src="../src/images/book_icon.png" alt="">签约</li> */}
                    </div>
                </ul>
                <div className="top-line">
                    <div className="w">
                        <img src={require('../../images/news_heading_title.png')} alt="" />
                        <span>2019新人赏</span>
                    </div>
                </div>
                <div className="testimonial">
                    <div className="w">
                        <div className="top">
                            <h3>编辑推荐</h3><span>2019第25周勤更推荐</span><a href="###">更多<img src="../../images/more.png" alt="" /></a>
                        </div>
                        <ul className="list">
                            {this.state.api.map(item => {
                                return <li key={item.id}>
                                    <img src={item.coverUrl}
                                        alt="" />
                                    <div>
                                        <h4>{item.name}</h4>
                                        <p>{item.about}</p>
                                        <i></i>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                <div className="fenglei">
                    <div className="w">
                        <div className="fenlei-top">
                            <ul>
                                {this.state.apiname.map(item => {
                                    return <li key={item.name} onClick={this.lisits.bind(null, { id: item.id, name: item.name })} className={this.state.num === item.name ? 'gaoliang' : null}>{item.name}</li>
                                })}
                            </ul>
                        </div>
                        <div className="tb">查看更多<img src="../src/images/more.png" alt="" /></div>
                        <ul className="fenlei-bottom">
                            {this.state.api2.map(item => {
                                return <li key={item.id}>
                                    <img src={item.images}
                                        alt="" />
                                    <div>
                                        <h4>{item.bookname}</h4>
                                        <p>{item.introduce}</p>
                                        <p className={'p2'}>{item.Theauthor}</p>
                                    </div>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}
Content = withRouter(Content)
export default Content