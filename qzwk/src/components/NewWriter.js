import React from 'react'
import PublicFoot from './PublicFoot.js';
import { withRouter } from 'react-router-dom'
let NewWriter = (props) => {
    let img = {
        width: "100%"
    };
    let logo = {
        width: "100%"
    };
    function go() {
        props.history.push('/home')
    }
    return (
        <div id="newwriter" >
            <div onClick={go} style={{ position: "fixed", backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '50%', width: "12vw", height: "12vw", fontSize: '8vw', textAlign: 'center', lineHeight: '12vw', color: '#fff', top: "4vw", left: "4vw" }}>{'<'}</div>
            <div style={{ width: "100%", padding: "10vw", boxSizing: "border-box" }}>
                <img style={logo} src={require('../images/newwriter/mob_logo.67893095.png')} alt="" />
                <img style={{ height: "50%" }} src={require('../images/newwriter/download.png')} alt="" />
            </div>
            <img style={img} src={require('../images/newwriter/1.jpg')} alt="" />
            <img style={img} src={require('../images/newwriter/2.jpg')} alt="" />
            <img style={img} src={require('../images/newwriter/3.jpg')} alt="" />
            <img style={img} src={require('../images/newwriter/4.jpg')} alt="" />
            <img style={img} src={require('../images/newwriter/5.png')} alt="" />
            <img style={img} src={require('../images/newwriter/6.jpg')} alt="" />
            <img style={img} src={require('../images/newwriter/7.jpg')} alt="" />
            <PublicFoot />
        </div >
    )
}
NewWriter = withRouter(NewWriter)
export default NewWriter;