import * as React from "react";
import {Card} from "react-toolbox/lib/card";
import {Input} from "react-toolbox/lib/input";
import {Button} from "react-toolbox/lib/button";

import * as Style from "./PostCard.css";
import { POST_FORM_NAME, POST_NAME_NAME, POST_MESSAGE_NAME, POST_FILE_FORM_NAME, POST_FORM_ID, API_IP_ADRESS } from "../../../Config";
import { mockObjs } from "../MockData/MockData";

interface PostCardProps{
    onSended: () => void
    gotoLogin: () => void
    className: string
}
interface PostCardState{
    name: string;
    message: string;
    filename: string
}

export class PostCard extends React.Component<PostCardProps,PostCardState>{
    constructor(props: PostCardProps){
        super(props);
        this.state = {
            name: "",
            message: "",
            filename: ""
        }
        this.onSend = this.onSend.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.canSend = this.canSend.bind(this);
    }

    render(){
        function return_false(ev:React.FormEvent){
            ev.preventDefault();
            return false
        }
        return(
            <Card className={this.props.className}>
                <form onSubmit={return_false} name={POST_FORM_NAME} id={POST_FORM_ID} >
                    <Input 
                        name={POST_NAME_NAME}
                        label="お名前"
                        value={this.state.name}
                        onChange={this.onNameChange}
                        className={Style.nameInput}
                        maxLength={15}
                    />
                    <Input 
                        name={POST_MESSAGE_NAME}
                        label="メッセージ"
                        value={this.state.message}
                        onChange={this.onMessageChange}
                        className={Style.messageInput}
                        maxLength={2000}
                        multiline
                    />
                    <input 
                        name={POST_FILE_FORM_NAME}
                        type="file" 
                        className={Style.fileInput}
                        value={this.state.filename}
                        onChange={this.onFileChange}
                    />
                    <Button 
                        className={Style.sendButton}
                        disabled={!this.canSend()}
                        onClick={this.onSend}
                        label="送信"
                        accent
                        raised
                    />
                </form>
            </Card>   
        )
    }

    onSend(){
        // const formData = new FormData(document.getElementById(POST_FORM_ID) as HTMLFormElement);
        // formData.append("username",this.props.username.trim());
        // formData.append("password",this.props.password);
        // const xhr = new XMLHttpRequest();
        // xhr.open("POST",`http://${API_IP_ADRESS}/post`,true);
        // const that = this;
        // xhr.onload = function(){
        //     switch(xhr.status){
        //         case 200:
        //         that.props.onSended()
        //         break;
        //         case 401:
        //         that.props.gotoLogin()
        //         break;
        //     }
        // }
        // xhr.send(formData);
        const id = mockObjs.length;
        mockObjs.push({
            id: id,
            timestamp: new Date().toLocaleDateString(),
            name: this.state.name,
            message: this.state.message,
            fileurl: undefined
        })
        this.props.onSended();
    }
    onNameChange(val:string){
        this.setState({
            name: val.trim() == "" ? "" : val
        })
    }
    onMessageChange(val:string){
        this.setState({
            message: val.trim() == "" ? "" : val
        })
    }
    onFileChange(ev:React.ChangeEvent){
        this.setState({
            filename: (ev.target as HTMLInputElement).value
        })
    }
    canSend():boolean{
        const postForm = document.getElementById(POST_FORM_ID) as HTMLFormElement | null;
        if (postForm == null) return false;
        const fileInput = postForm[POST_FILE_FORM_NAME] as HTMLInputElement;
        if(fileInput.value == "" && this.state.message == "") return false;
        return true
    }
}