import * as React from "react";
import {observer} from "mobx-react";
import * as style from "./style.pcss"
import {SearchBarProps} from './propsType'
import _ from "lodash"

@observer
export default class SearchBar extends React.Component<SearchBarProps, any> {

    static defaultProps = {
        placeholder: '搜索商品',
        scrollHeight: 170,
        background: '#fff',
    };

    constructor(props: SearchBarProps) {
        super(props);
        this.state = {
            isScroll: false,
        };
    }

    componentDidMount() {
        this.regScroll(this.onScrollHandler.bind(this));
    }

    componentWillUnmount() {
        this.removeScroll();
    }

    // 添加事件监听
    regScroll = (myHandler) => {
        if (window.onscroll === null) {
            window.onscroll = myHandler;
        } else if (typeof window.onscroll === 'function') {
            window.onscroll = () => {
                myHandler();
            };
        }
    }

    // 删除所有事件监听
    removeScroll = () => {
        window.onscroll = null;
    };

    onScrollHandler = _.throttle(() => {
        const {scrollHeight = 0} = this.props;
        if (window.scrollY > scrollHeight) {
            this.setState({
                isScroll: true
            });
        } else {
            this.setState({
                isScroll: false
            });
        }
    }, 100);

    render() {
        const {placeholder, onClick, background} = this.props;
        return (
            <div className={style.search} onClick={onClick}>
                <div
                    style={{background}}
                    className={`${style.searchDiv} ${this.state.isScroll ? style.searchDivActive : style.searchDivDefault}`}>{}</div>
                <div
                    className={`${style.searchInput} ${this.state.isScroll ? style.searchInputActive : style.searchInputDefault}`}>
                    <img src={require("./images/icon_search@3x.png")}/>
                    <span>{placeholder}</span>
                </div>
            </div>
        )
    }
}

