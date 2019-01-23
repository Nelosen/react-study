import React, {Component} from 'react'
import FloorItem from '../index'
import SearchBar from '../../search-bar/index'
import TabBar from '../../tab-bar/index'

const dataSource = [
    {
        imgUrl: '/component/floor-item/images/icon_collect@3x.png',
        name: '猜你喜欢',
        goods: [
            {
                id: 1,
                image: '/component/floor-item/images/pro.jpg',
                name: '好吃的',
                minSalePrice: 5,
                sales: 222,
            }, {
                id: 2,
                image: '/component/floor-item/images/pro.jpg',
                name: '湖北脐橙 超甜 维C 单个250g 4斤起售 湖北脐橙 超甜 维C 单个250g 4斤起售',
                minSalePrice: 2,
                sales: 222,
            },
            {
                id: 3,
                image: '/component/floor-item/images/pro2.jpg',
                name: '好吃的',
                minSalePrice: 5,
                sales: 222,
            }, {
                id: 4,
                image: '/component/floor-item/images/pro2.jpg',
                name: '湖北脐橙 超甜 维C 单个250g 4斤起售 湖北脐橙 超甜 维C 单个250g 4斤起售',
                minSalePrice: 2,
                sales: 222,
            }, {
                id: 5,
                image: '/component/floor-item/images/pro2.jpg',
                name: '湖北脐橙 超甜 维C 单个250g 4斤起售 湖北脐橙 超甜 维C 单个250g 4斤起售',
                minSalePrice: 2,
                sales: 222,
            }
        ]
    },
    {
        imgUrl: '/component/floor-item/images/icon_collect@3x.png',
        name: '猜我喜欢',
        goods: [
            {
                id: 1,
                image: '/component/floor-item/images/pro.jpg',
                name: '好吃的',
                minSalePrice: 5,
                sales: 222,
            }, {
                id: 2,
                image: '/component/floor-item/images/pro.jpg',
                name: '湖北脐橙 超甜 维C 单个250g 4斤起售 湖北脐橙 超甜 维C 单个250g 4斤起售',
                minSalePrice: 2,
                sales: 222,
            }
        ]
    }
];

export default class FloorItemDemo extends Component<any, any> {

    onClick = () => {
        this.props.history.push('/navBox');
    };

    onClickProduct = (v) => {
        console.log(v , 'id');
        this.props.history.push('/searchBar');
    };

    moreClick = (v) => {
        console.log(v ,'more')
    };

    render() {
        return (
            <div>
                <SearchBar onClick={this.onClick}/>
                <FloorItem dataSource={dataSource} onClick={this.onClickProduct} moreClick={this.moreClick}/>
                <TabBar currentIndex={2} {...this.props} />
            </div>
        )
    }
}
