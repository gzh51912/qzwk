import React, { Component } from 'react'
import { Carousel } from 'antd';
class banner extends Component {
    constructor() {
        super()
        this.state = {
            lbt: [
                { imgs: require('../../images/1077805_f629165a321cbeb9cd7dc9fc2eac0621.jpg') },
                { imgs: require('../../images/1077805_d358310571cd71be38afee7b1abb8d20.jpg') },
                { imgs: require('../../images/1077805_e81396d3aaafb26a6fd2a23518dfba18.jpg') },
                { imgs: require('../../images/1077805_231c19975bc526cd31511f917cff562b.jpg') },
                { imgs: require('../../images/1077805_89c23ee803e9c4062658432abc704efa.jpg') },
                { imgs: require('../../images/1077805_57b3023423926b6ff0419ca9c86b2d38.jpg') },
                { imgs: require('../../images/1009019_3c4943e522eb8d00ff492753dfe42b4d.jpg') }
            ]
        }
    }
    render() {
        return (
            <>
                <Carousel autoplay dots={false}>
                    {this.state.lbt.map(item => {
                        return <div key={item.imgs}>
                            <img src={item.imgs} style={{ width: '100%' ,height:'44.26vw'}} alt={item.imgs}></img>
                        </div>
                    })}
                </Carousel>
            </>
        )
    }
}
export default banner;