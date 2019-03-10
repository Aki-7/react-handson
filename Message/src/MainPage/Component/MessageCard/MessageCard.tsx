import * as React from "react";
import {Card} from "react-toolbox/lib/card";
import {ThreadObj} from "../../../Config";
import * as Style from "./MessageCard.css";

interface MessageCardProps{
    className: string
    threadObj: ThreadObj 
}
interface MessageCardState{

}

export class MessageCard extends React.Component<MessageCardProps,MessageCardState>{
    render(){
        var img: JSX.Element | null = null
        if (this.props.threadObj.fileurl) {
            img = 
                <div className={Style.imgContainer}>
                    <img src={this.props.threadObj.fileurl} className={Style.img} />
                </div>
        }
        return(
            <Card className={this.props.className} key={this.props.threadObj.id}>
                <div className={Style.header}>
                    お名前: {this.props.threadObj.name}    {this.props.threadObj.timestamp}
                </div>
                <pre className={Style.body}>
                    {this.props.threadObj.message}
                </pre>
                {img}
            </Card>
        )
    }
}