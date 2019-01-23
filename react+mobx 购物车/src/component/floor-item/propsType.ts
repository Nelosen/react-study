export interface ProductsItemProps {
    id?: number;
    image?: string;
    name?: string;
    sales?: number;
    minSalePrice?: number;
}

export interface ProductsProps {
    imgUrl?: string;
    name?: string;
    goods: ProductsItemProps[];
}

export interface FloorItemProps {
    className?: string;
    style?: React.CSSProperties;
    dataSource: ProductsProps[];  // 数据源
    moreClick?: (data: any) => void;  // 商品点击
    onClick?: (data: any) => void;  // 商品点击
}
