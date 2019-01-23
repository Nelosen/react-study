export interface SearchBarProps {
    className?: string;
    style?: React.CSSProperties;
    placeholder?: string;  // 搜索框内内容
    onClick?: () => any;
    scrollHeight?: number;  // 滑动出现变化的高度
    background?: string;  // 搜索框底色
}
