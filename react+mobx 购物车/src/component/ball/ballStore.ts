import {action, observable} from "mobx";

class BallStore {
    @observable colors:any=['red','green','purple','yellow','pink','orange']
    @observable currentColor:string ='';
    @action changeColor(v){
        this.currentColor = v
    }
    @action changeBallColor(){
        setInterval(()=>{
            const i = Math.floor(Math.random()*5);
            this.changeColor(this.colors[i])
            console.log(this.currentColor[i])
            }, 1000);
        }
    }
export const ballStore = new BallStore();
// if(i > this.colors.length){
//     i = 0;
// } else {
//     i++;
//     this.changeColor(this.colors[i])
// }