import React, { Component } from 'react';
import { Form, Icon, Input, Button, message } from 'antd';
import '../scss/Register.scss';
import 'antd/dist/antd.css'
import axios from 'axios';

import md5 from 'js-md5';

// import { create } from "../utils/jsonwebtoken.js";

import Head from './Head'


class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: '',
            password: '',
            comfirm: ''
        }
        this.reg = this.reg.bind(this)
        this.validFunction = this.validFunction.bind(this)
        this.checkName = this.checkName.bind(this)
        this.gologin = this.gologin.bind(this)
    }

    async reg() {
        //获取账号、密码
        let { mail, password, comfirm } = this.state

        if (mail && password && password === comfirm) {//判断非空
            // mail = create(mail);
            password = md5(password)//密码的MD5加密
            console.log("mail", mail, 'password', password)

            let result = await axios.post('http://118.190.52.161:8100/reg', {
                username: mail,
                password
            })

            console.log(result.data);
            if (result.data.status) {
                this.regsuccess()
                setTimeout(() => { this.props.history.push({ pathname: "/login", query: { username: mail } }) }, 3000);
            } else {
                this.regfales()
            }
        }
    }

    regsuccess = () => {
        message.info('注册成功，即将进入登录页面');
    }
    regfales = () => {
        message.info('注册失败');
    }

    validFunction(rule, value, callback) {//确认密码的验证
        let { password } = this.state;
        if (value) {//判断非空
            if (password === value) {
                //两次密码相同则修改state
                this.setState({
                    comfirm: value
                })
                callback();
            } else {
                callback("两次输入密码不一致")
            }
        } else {
            callback('请确认密码')
        }
    }

    async checkName(rule, value, callback) {
        let reg = new RegExp("^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$");
        if (reg.test(value)) {
            let result = await axios.post('http://118.190.52.161:8100/checkname', { username: value });
            console.log("result", result)
            if (result.data.code) {
                this.setState({
                    mail: value
                })
                callback();
            } else {
                callback('邮箱已被注册');
            }
        } else {
            callback('邮箱地址不正确');
        }
    }

    gologin() {
        this.props.history.push('/login')
    }

    render() {
        console.log(this.props)
        const { getFieldDecorator } = this.props.form;
        return (
            <>
                <Head />
                <div id="register">
                    <h2>快速注册</h2>
                    <p>若未创建账号，将自动创建</p>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Form.Item>
                            {getFieldDecorator('mail', {
                                rules: [{ required: true, message: '请输入邮箱地址' },
                                {
                                    validator: this.checkName
                                }],
                            })(
                                <Input
                                    prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.5)' }} />}
                                    placeholder="请输入邮箱地址"
                                />
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: '请输入密码' },
                                {
                                    pattern: new RegExp(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/, "g"),
                                    message: "密码格式不正确"
                                }],
                            })(
                                <Input
                                    prefix={<Icon type="edit" style={{ color: 'rgba(0,0,0,.5)' }} />}
                                    type="password"
                                    placeholder="请输入密码"
                                    onChange={e => {
                                        let reg = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$");
                                        let value = e.target.value
                                        if (reg.test(value)) {
                                            this.setState({
                                                password: e.target.value
                                            })
                                        }
                                    }}
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            {getFieldDecorator('comfirm', {
                                rules: [
                                    {
                                        validator: this.validFunction
                                    }
                                ],
                            })(
                                <Input
                                    prefix={<Icon type="check-circle" style={{ color: 'rgba(0,0,0,.5)' }} />}
                                    type="password"
                                    placeholder="请确认密码"
                                    onChange={e => {
                                        let reg = new RegExp("^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$");
                                        let value = e.target.value
                                        if (reg.test(value)) {
                                            this.setState({
                                                comfirm: e.target.value
                                            })
                                        }
                                    }}
                                />,
                            )}
                        </Form.Item>
                    </Form>
                    <p className="reg">邮箱注册</p>
                    <Button className="regbtn" type="link" shape="round" onClick={this.reg}>
                        快速注册
                </Button>
                    <p className="register2" onClick={this.gologin}>已有账号？直接登录</p>
                    <p className="agreed">登录即代表您已经同意<span className="agreement">用户使用协议</span></p>
                </div></>
        )
    }
}

Register = Form.create({})(Register);

export default Register;