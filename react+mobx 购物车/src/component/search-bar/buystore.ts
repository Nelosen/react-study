import {observable, action, computed } from 'mobx';


export class RadioType {
    data?: any;
    type?: string;
    checked?: boolean
}
export interface BuyProducts {
    id?: number;
    name?: string;
    choose?: boolean;
    price?: number;
}
export interface Buyprotype {
    dataSource: BuyProducts[]
}

class BuyStore {
    @observable shopCartList: any = [];

    @observable dataSource: any = {
        title: '新疆阳光绿地杭州分公司',
        goods: [
            {
                id: 1,
                goodNum: 1,
                name:'薯片',
                choose: false,
                price: 100,
            },{
                id: 2,
                goodNum: 1,
                name:'薯片',
                choose: false,
                price: 100,
            },
        ]
    };
    @observable totalPrice:number = 0;
    @observable over: boolean = false;
    @observable chooseAll: boolean = false;
    @observable a: any = [];
    @action changeOver(value) {
        this.over = value
    }

    @action changeLists(value) {
        this.dataSource.goods = value
    }
    @action changetotalPrice(value) {
        this.totalPrice = value
    }

    @action changeChoose(data) {

        data.choose = !data.choose
    }
    @action changeReduce(item) {
        item.goodNum -= 1;

    }
    @action changeAdd(item) {
        item.goodNum += 1;
    }


    @computed get total() {
        let total = 0;
        this.dataSource.goods.forEach(item => {
                total = total + item.goodNum * item.price
        });
        return total
    }


    @action changeChooseAll() {

        const chooses = this.dataSource.goods.map(item => item.choose);
        this.chooseAll = !(chooses.findIndex(item => item === false) >= 0)
    }

    @action setChooseAll() {

        this.dataSource.goods.map(item => item.choose = !this.chooseAll)
        this.chooseAll = !this.chooseAll

    }
}
export const buyStore = new BuyStore();