import * as React from 'react'
import { NavBoxPropsType, NavBoxList } from './propsType'
import * as style from './style.pcss'

export default class NavBox extends React.Component<NavBoxPropsType, any> {

    static defaultProps = {
        colNumber: 4
    }

    render() {
        let width = '25%';

        const { data, colNumber, onClick } = this.props

        if (colNumber && colNumber > 0 && (100 % colNumber) === 0) {
            width = (100 / colNumber) + '%'
        }
        return (<nav className={style.navBox}>
                {data.map((item, index) => <NavItem
                    key={index}
                    dataItem={item}
                    width={width}
                    onClick={onClick}
                />)}
            </nav>)
    }
}

class NavItem extends React.Component<{
    dataItem: NavBoxList, width: string, onClick: (item) => void
}, any> {

    itemClick = (item) => {
        return () => {
            this.props.onClick(item)
        }
    }

    render() {
        const { img, label } = this.props.dataItem;
        const width = this.props.width;
        return (<a className={style.navItem}
                   style={{ width: width }}
                   onClick={this.itemClick(this.props.dataItem)}
            >
                <span className={style.navItemWrap}>
                    <img src={img}/>
                    <span>{label}</span>
                </span>
            </a>)
    }
}