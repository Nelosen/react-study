import React from "react"
import * as style from './style.pcss'
import {TabBarProps} from "./propsType";

export default class TabBar extends React.Component<TabBarProps, any> {

    constructor(props) {
        super(props);
        this.state = {
            currentIndex: this.props.currentIndex,
        }
    }

    check_title_index(index) {
        return index === this.state.currentIndex ? style.active : style.tab_title
    }

    onClick = (index) => {
        return () => {
            this.setState({currentIndex: index});
            const props = this.props as any;
            switch (index) {
                case 0:
                    props.history.push('/home');
                    break;
                case 1:
                    props.history.push('/searchBar');
                    break;
                case 2:
                    props.history.push('/floorItem');
                    break;
            }
        }

    };

    render() {
        return (
            <div className={style.tab_title_wrap}>
                <div onClick={this.onClick(0)} className={this.check_title_index(0)}>
                    {
                        this.state.currentIndex === 0 ?
                            <img src={'/component/tab-bar/images/icon_HomeSelected@3x.png'}/> :
                            <img src={'/component/tab-bar/images/icon_HomeUnselected@3x.png'}/>
                    }
                    <span>首页</span>
                </div>
                <div onClick={this.onClick(1)} className={this.check_title_index(1)}>
                    {
                        this.state.currentIndex === 1 ?
                            <img src={'/component/tab-bar/images/icon_CarSelected@3x.png'}/> :
                            <img src={'/component/tab-bar/images/icon_CarUnselected@3x.png'}/>
                    }
                    <span>购物车</span>
                </div>
                <div onClick={this.onClick(2)} className={this.check_title_index(2)}>
                    {
                        this.state.currentIndex === 2 ?
                            <img src={'/component/tab-bar/images/icon_MySelected@3x.png'}/> :
                            <img src={'/component/tab-bar/images/icon_MyUnselected@3x.png'}/>
                    }
                    <span>我的</span>
                </div>
            </div>
        )
    }
}

