import React, {Component} from 'react'
import TabBar from '../../tab-bar/index'
import {default as Buy, BuyFooter} from '../buy'


export default class SearchBarDemo extends Component<any, any> {

    onClick = () => {
        this.props.history.push('/navBox');
    };

    render() {
        return (
            <div>
                <Buy {...this.props}/>
                <TabBar currentIndex={1} {...this.props} />
                <BuyFooter {...this.props}/>
            </div>
        )
    }
}