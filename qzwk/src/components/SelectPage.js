import React, { Component } from 'react';
import { Pagination, Input } from 'antd';
import Head from './Head'
import '../scss/PageList.scss';
import 'antd/dist/antd.css';
import PublicFoot from './PublicFoot.js';
import axios from 'axios';

const { Search } = Input;

class SelectPage extends Component {
    constructor() {
        super();

        this.state = {
            datalist: [],
            showlist: [],
            page: 1,
            total: 0
        }
        this.search = this.search.bind(this);
        this.changepage = this.changepage.bind(this);
    }

    async search(value) {
        if (value.trim()) {
            let result = await axios.post('http://118.190.52.161:8100/chaxuns', { value })
            if (result.data.status) {
                this.setState({
                    datalist: result.data.data,
                    showlist: result.data.data.slice(0, 4),
                    total: result.data.data.length
                })
            }
        }
    }

    changepage(page) {
        let { datalist } = this.state;
        this.setState({
            showlist: datalist.slice((page - 1) * 4, page * 4)
        })
    }

    componentDidMount() {
        let { query } = this.props.location;
        if (query) {
            let { value } = query;
            this.search(value);
        }
    }



    render() {
        return (
            <>
                <Head></Head>
                <div>
                    <div id="pagelist" >
                        <h2>
                            <div><span className="square"></span>搜索小说</div>
                            <div className="changetype">
                                <Search
                                    placeholder="搜索小说"
                                    onSearch={this.search}
                                    style={{ width: 200 }}
                                />
                            </div>
                        </h2>

                        <ul className="fictionlist">
                            {
                                this.state.showlist.map((item, index) => {
                                    return (
                                        <li key={index}>
                                            <img src={item.images} alt="" />
                                            <p className="title">{item.bookname}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        <Pagination defaultCurrent={1} pageSize={4} total={this.state.total} onChange={this.changepage} />
                    </div>
                    <PublicFoot />
                </div>
            </>
        )
    }
}

export default SelectPage;