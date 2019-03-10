import * as React from "react";
import {Button} from "react-toolbox/lib/button";

import{
    Thread
} from "../../Component";

import * as Style from "./ThreadCtr.css";

interface ThreadCtrProps {
    className: string
    latestmsgId: number
}
interface ThreadCtrState{
    msgCount: number
}

export class ThreadCtr extends React.Component<ThreadCtrProps,ThreadCtrState>{
    constructor(props:ThreadCtrProps){
        super(props);
        this.state = {
            msgCount: 20
        }
        this.onSeeMore = this.onSeeMore.bind(this);
    }

    render(){
        return(
            <div className={this.props.className}>
                <Thread 
                    className={Style.thread} 
                    latestmsgId={this.props.latestmsgId}
                    msgCount={this.state.msgCount}
                />
                <Button 
                    className={Style.seeMoreButton}
                    label="See More"
                    onClick={this.onSeeMore}
                />
            </div>
        )
    }

    onSeeMore(){
        this.setState((prevState: ThreadCtrState,_) => {
            return {
                msgCount: prevState.msgCount + 20
            }
        })
    }
}