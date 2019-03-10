import * as React from "react";
import { API_IP_ADRESS } from "../../../Config";
import {ThreadObj} from "../../../Config";
import * as Style from "./Thread.css";
import {MessageCard} from "../../Component";
import { mockObjs } from "../MockData/MockData";

interface ThreadProps{
    className: string
    latestmsgId: number
    msgCount: number
}
interface ThreadState{
    threadData: ThreadObj[] //先頭が最新 のちにこのクラス内から変更を受ける可能性もあるのでStateとした。
}
// [
//     {
//         id: 0, 
//         timestamp: "2018/10/10",
//         name:"aki",
//         fileurl: undefined,
//         message: "hi!"
//     },{
//         id: 1, 
//         timestamp: "2018/10/10",
//         name:"emi",
//         fileurl: undefined,
//         message: "Hello."
//     },
// ]

export class Thread extends React.Component<ThreadProps,ThreadState>{
    cash: {[id:number]: ThreadObj}
    
    constructor(props:ThreadProps){
        super(props);
        this.cash = {};
        this.getThreadsData = this.getThreadsData.bind(this);
        this.getThreadData = this.getThreadData.bind(this)
        this.state = {
            threadData: this.getThreadsData(this.props.latestmsgId,this.props.msgCount)
        }
    }

    componentWillReceiveProps(nextProps: ThreadProps){
        this.setState({
            threadData: this.getThreadsData(nextProps.latestmsgId,nextProps.msgCount)
        })
    }

    getThreadsData(lastMsgId: number,msgCount:number):ThreadObj[]{
        var newThreadData: ThreadObj[] = [];
        for (let id = lastMsgId; id > lastMsgId - msgCount; id --){
            // if (id <= 0) break;
            if(id < 0) break;
            if (id in Object.keys(this.cash).keys){
                newThreadData.push(this.getThreadData(id))
                continue;
            }
            newThreadData.push(this.getThreadData(id));
        }
        return newThreadData
    }

    getThreadData(id: number):ThreadObj{
        // const xhr = new XMLHttpRequest()
        // xhr.open("GET",`http://${API_IP_ADRESS}/message?id=${id}&pass=${this.props.password}&user=${this.props.username}`,false);
        // xhr.setRequestHeader("Content-Type","application/json");
        // xhr.send();
        // return JSON.parse(xhr.responseText) as ThreadObj

        return mockObjs[id];
    }

    render(){
        const elem: JSX.Element[] = []
        for(let i = 0;i < this.state.threadData.length;i ++){
            const thread = this.state.threadData[i];
            elem.push( <MessageCard threadObj={thread} className={Style.card} key={thread.id}/> )
        }
        return(
            <div className={this.props.className}>
                {elem}
            </div>
        )
    }
}