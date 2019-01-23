import React, { Component } from 'react'
import { Link } from "react-router-dom"
import TabBar from './component/tab-bar/index'

export default class Home extends Component<any, any> {
    render() {
        return (
            <div>
                <ul style={{listStyle: 'none', padding: 0, margin: 0}}>
                    <li style={{textAlign: 'center', padding: '20px 5px'}}>
                        <Link to="/navBox">navBox</Link>
                    </li>
                    <li style={{textAlign: 'center', padding: '20px 5px'}}>
                        <Link to="/searchBar">search-bar</Link>
                    </li>
                    <li style={{textAlign: 'center', padding: '20px 5px'}}>
                        <Link to="/floorItem">floor-item</Link>
                    </li>
                    <li style={{textAlign: 'center', padding: '20px 5px'}}>
                        <Link to="/tabBar">tab-bar</Link>
                    </li>
                    <li style={{textAlign: 'center', padding: '20px 5px'}}>
                        <Link to="/ball">ball-bar</Link>
                    </li>
                    <li style={{textAlign: 'center', padding: '20px 5px'}}>
                        <Link to="/button">button-bar</Link>
                    </li>
                </ul>
                <TabBar currentIndex={0} {...this.props} />
            </div>
        )
    }
}