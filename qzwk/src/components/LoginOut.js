import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'antd';

import 'antd/dist/antd.css';

class LoginOut extends Component {
    constructor() {
        super();
        this.state = {
            count: 3
        }
        this.gohome = this.gohome.bind(this)
    }

    componentDidMount() {
        this.time = setInterval(() => {
            let { count } = this.state;
            count -= 1;
            if (count === 0) {
                this.gohome();
            } else {
                this.setState({
                    count
                })
            }
        }, 1000)
    }

    gohome = () => {
        clearInterval(this.time);
        this.props.history.push('/home')
    }

    render() {
        return (
            <div id="loginout" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                <div style={{ border: "1px solid #58bc58", padding: "10vw", marginTop: "10vw" }}>
                    <p>注销成功</p>
                </div>
            </div>
        )
    }
}

LoginOut = withRouter(LoginOut)

export default LoginOut;