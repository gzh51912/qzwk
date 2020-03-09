import React from 'react'
import Head from '../Head'
import Banner from './banner'
import Content from './content'
import PublicFoot from '../PublicFoot'
const index = () => {
    return (
        <>
            <Head></Head>
            <Banner></Banner>
            <Content></Content>
            <PublicFoot></PublicFoot>
        </>
    )
}
export default index;