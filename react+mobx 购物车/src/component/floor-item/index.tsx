import * as React from "react";
import {observer} from "mobx-react";
import * as style from "./style.pcss"
import {FloorItemProps} from './propsType'

@observer
export default class FloorItem extends React.Component<FloorItemProps, any> {

    static defaultProps = {};

    render() {
        const {dataSource, moreClick} = this.props;
        return (
            <div className={style.floorDiv}>
                {
                    dataSource.map((item) => (
                        <div className={style.floor}>
                            <HeadImg imgUrl={item.imgUrl} name={item.name}/>
                            <div className={style.floorProductItem}>
                                {
                                    item.goods.map((data) => (
                                        <Product goods={data} {...this.props} />
                                    ))
                                }
                            </div>
                            <div className={style.more} onClick={() => moreClick && moreClick(item)}>
                                <span>查看更多</span>
                                <img src={require('./images/icon_more@3x.png')}/>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}

@observer
export class HeadImg extends React.Component<any, any> {
    render() {
        return (
            <div className={style.floorImg}>
                <img src={this.props.imgUrl}/>
                <span>{this.props.name}</span>
            </div>
        )
    }
}

@observer
export class Product extends React.Component<any, any> {
    render() {
        const data = this.props.goods;
        const {onClick} = this.props;
        return (
            <div className={style.floorProduct} onClick={() => onClick && onClick(data)}>
                <img src={data.image}/>
                <p>{data.name}</p>
                <div className={style.span}>
                    <span><span>￥</span>{data.minSalePrice}</span>
                    <span>{data.sales}人付款</span>
                </div>
            </div>
        )
    }
}