import React, {Component} from 'react'
import TabBar from '../index'

export default class TabBarDemo extends Component<any, any> {
    render() {
        return (
            <div>
                <TabBar currentIndex={0} {...this.props} />
            </div>
        )
    }
}



