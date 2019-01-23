import React, {Component} from 'react'
import * as style from "../style.pcss"
import {ballStore} from "../ballStore";
import {observer} from "mobx-react";

@observer
export default class TabBarDemo extends Component {
    constructor(p){
        super(p);
        ballStore.changeBallColor()
    }
    // public changeColor=() =>{
    //     ballStore.changeBallColor()
    // };


    render() {
        console.log(ballStore.currentColor,'1')
        return (
            <div   className={style.ball} style={{'backgroundColor':ballStore.currentColor}}>
                1
                {/*<button onClick={e=>this.changeColor()}>变色</button>*/}
            </div>

        )
    }
}



