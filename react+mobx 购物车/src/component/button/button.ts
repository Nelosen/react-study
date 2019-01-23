import {action, observable} from "mobx";

class ButtonStore {
    @observable dataSource:any ={
        buttons: [
            {
                name: 1,
                color:'#fff'

            },{
                name:1,
                color:'#fff'

            },{
                name:1,
                color:'#fff'

            }
        ]
    };
    @action changeRadio (item) {
        for (let i=0;i<this.dataSource.buttons.length;i++){
            if (this.dataSource.buttons[i] !== item) {
                this.dataSource.buttons[i].color ="white"
            }else {
                this.dataSource.buttons[i].color = "red"
            }
        }
    }
    @action push (){
        const obj = {
            name:1,
            color: '#fff'
        };
        this.dataSource.buttons.push(obj)
    }
    @action delete (){
        this.dataSource.buttons.splice(0,1)
    }
}
export const buttonStore = new ButtonStore;