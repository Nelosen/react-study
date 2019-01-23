import React, { Component } from 'react'
import NavBox from '../index'

const data = [
    {img: '', label: '测试商品1'},
    {img: '', label: '测试商品2'},
    {img: '', label: '测试商品3'},
    {img: '', label: '测试商品4'},
    {img: '', label: '测试商品5'},
    {img: '', label: '测试商品6'},
    {img: '', label: '测试商品7'},
    {img: '', label: '测试商品8'},
    {img: '', label: '测试商品9'},
    {img: '', label: '测试商品10'}
]


export default class NavBoxDemo extends Component<any, any> {

    onClick = (item) => {
        console.log(item)
    }

    render() {
        return <NavBox data={data} colNumber={5} onClick={this.onClick}/>
    }
}