import React, {Component} from 'react'
import {observer} from "mobx-react";
import * as style from "./style.pcss"
import {RadioType, buyStore} from "./buystore";


@observer
export default class Buy extends Component<any, any> {
    public reduce = (Item) => {
        return () => {
            if (Item.goodNum === 0){
                return
            } else {
                buyStore.changeReduce(Item)
            }
        }
    };
    public add = (Item) => {
        return () => {
            if (Item.goodNum === 10){
                return
            } else {
                buyStore.changeAdd(Item)
            }
        }
    };
    render() {

        return (
            <div className={style.buy}>
                <div className={style.buytop}>
                    <Radio checked={buyStore.chooseAll} type='1'/>
                    <p>{buyStore.dataSource.title}</p>
                </div>
                {
                    buyStore.dataSource.goods.map((Item) => (
                        <div className={style.buymid}>
                            <Radio checked={Item.choose} data={Item} type='radio' />
                            <img src={require('./images/pic@2x.png')} className={style.photo}/>
                            <div className={style.buyright}>
                                <p>1111</p>
                                <p className={style.ml}>规格：360ML</p>
                                <div className={style.buyfoot}>
                                    <p className={style.price}
                                    >  {Item.price}</p>
                                    <div className={style.computed}>
                                    <span>
                                        <img src={require('./images/icon_reduce.png')} className={style.reduce}
                                           onClick={this.reduce(Item)}
                                        />
                                    </span>
                                        <span>{Item.goodNum}</span>
                                        <span>
                                        <img src={require('./images/icon_add@2x.png')} className={style.add}
                                           onClick={this.add(Item)}
                                        />
                                </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}
@observer
export class BuyFooter extends React.Component<any, any> {
    static defaultProps = {};


    render() {
        return (
            <div className={style.buyfooter}>
                <Radio checked={buyStore.chooseAll}/>
                <p>全选</p>
                <div className={style.buyfootermid}>
                    <p>合计:</p>
                    <p className={style.endprice}>{buyStore.total}</p>
                </div>
                <div className={style.end}>
                    <p>结算</p>
                </div>
            </div>
        )
    }
}

@observer
class Radio extends Component<RadioType, any> {

    onClick = (data, type) => {
        return () => {

            if (type === 'radio') {
                buyStore.changeChoose(data);
                buyStore.changeChooseAll()
            }else {
                buyStore.setChooseAll()
            }
        }
    }

    render() {
        const { checked, data, type  } = this.props;
        return (
            <span className={style.tag} onClick={this.onClick(data,type)}>
                {
                    checked ?
                        <img src={require('./images/icon_choice_pre@2x.png')}/>
                        :
                        <img src={require('./images/icon_choice@2x.png')}/>
                }
            </span>
        )
    }
}