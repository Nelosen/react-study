import React, {Component} from 'react'
import {observer} from "mobx-react";
import * as style from "../button.pcss"
import {buttonStore} from "../button";


@observer
export default class TabBarDemo extends Component {
    public choose=(item)=>{
        return()=>{
            buttonStore.changeRadio(item)
        }
    };
    public add =() =>{
        return()=>{
            buttonStore.push()
        }
    };
    public reduce =() =>{
        return()=>{
            buttonStore.delete()
        }
    };
    render() {

        return (
            <div>
                <div className={style.button}>
                    {
                        buttonStore.dataSource.buttons.map(item=>(
                            <div
                                style={{background:item.color}} className={style.radio}
                                onClick={this.choose(item)}
                            >
                                {item.name}
                            </div>
                        ))
                    }

                </div>
                <button onClick={this.add()} className={style.add}>加</button>
                <button onClick={this.reduce()} className={style.reduce}>减</button>
            </div>
        )
    }
}