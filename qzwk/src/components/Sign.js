import React from 'react';
import PublicFoot from './PublicFoot.js';
import Head from './Head'
const Sign = () => {
    return (
        <>
            <Head></Head>
            <div id="sign">
                <img style={{ width: "100%" }} src={require('../images/sign.png')} alt="" />
                <PublicFoot />
            </div >
        </>
    )
}

export default Sign;