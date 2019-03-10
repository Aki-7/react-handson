import * as React from "react";
import {
    Header, NewMsgCtr, ThreadCtr
} from "./Component";
import * as Style from "./MainPage.css";
import { API_IP_ADRESS } from "../Config";
import { mockObjs } from "./Component/MockData/MockData";

interface MainPageProps{
    gotoLogin: () => void
}
interface MainPageState{
    latestMsgId: number
}

export class MainPage extends React.Component<MainPageProps,MainPageState>{
    constructor(props: MainPageProps){
        super(props);
        this.state = {
            latestMsgId: this.getLatestMsgId()
        }
        this.onSended = this.onSended.bind(this);
    }
    render(){
        return(
            <div>
                <Header className={Style.header}/>
                <NewMsgCtr 
                    className={Style.newMsg} 
                    onSended={this.onSended} 
                    gotoLogin={this.props.gotoLogin}
                />
                <ThreadCtr 
                    className={Style.thread} 
                    latestmsgId={this.state.latestMsgId}
                /> 
            </div>
        )
    }

    onSended(){
        this.setState({
            latestMsgId: this.getLatestMsgId()
        })
    }

    getLatestMsgId():number{
        // const xhr = new XMLHttpRequest();
        // xhr.open("GET",`http://${API_IP_ADRESS}/latest_message_id`,false);
        // xhr.send();
        // return Number(xhr.response)
        return mockObjs.length - 1;
    }
}