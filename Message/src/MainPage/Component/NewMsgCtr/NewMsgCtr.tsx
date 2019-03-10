import * as React from "react";

import{
    PostCard
} from "../../Component";

import * as Style from "./NewMsgCtr.css";

interface NewMsgCtrProps{
    className: string
    onSended: () => void
    gotoLogin: () => void
}
interface NewMsgCtrState{

}

export class NewMsgCtr extends React.Component<NewMsgCtrProps,NewMsgCtrState>{
    render(){
        return(
            <div className={this.props.className}>
                新規メッセージ
                <PostCard 
                    className={Style.postCard} 
                    onSended={this.props.onSended} 
                    gotoLogin={this.props.gotoLogin}
                />
            </div>
        )
    }
}