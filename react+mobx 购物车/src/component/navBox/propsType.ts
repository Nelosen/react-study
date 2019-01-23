export interface NavBoxList {
    img: string
    label: string
}

export interface NavBoxPropsType {
    data: NavBoxList[]
    colNumber: number
    onClick: (item) => void
}