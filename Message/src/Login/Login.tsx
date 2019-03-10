import * as React from "react";
import {Card} from "react-toolbox/lib/card";
import {Input} from "react-toolbox/lib/input";
import {API_IP_ADRESS} from "../Config";
import * as Style from "./Login.css";

import {
    CardHeader
} from "./Component"

interface LoginProps{
    onLogined: (username: string,password: string) => void
}
interface LoginState{
    comment: string
    username: string
    password: string
}

export class Login extends React.Component<LoginProps,LoginState>{
    constructor(props:LoginProps){
        super(props);
        this.state = {
            comment: "",
            username: "",
            password: ""
        }
        this.onLogin = this.onLogin.bind(this);
        this.onLoginLoad = this.onLoginLoad.bind(this);
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    render(){
        return (
            <Card className={Style.loginCard}>
                <CardHeader onLogin={this.onLogin} className={Style.cardHeader} />
                {this.state.comment}
                <Input type="text" label="username" value={this.state.username} onChange={this.onUsernameChange} className={Style.input}/>
                <Input type="password" label="password" value={this.state.password} onChange={this.onPasswordChange} className={Style.input}/>
            </Card>
        )
    }

    onLogin(){
        // const xhr = new XMLHttpRequest()
        // xhr.open("POST",`http://${API_IP_ADRESS}/login`,true)
        // xhr.setRequestHeader("Content-Type","application/json");
        // const that = this;
        // xhr.onload = function(this: XMLHttpRequest){
        //     that.onLoginLoad(this);
        // }
        // xhr.send(JSON.stringify({username: this.state.username.trim(), password: this.state.password.trim()}))
        if(this.state.username.trim() == "user" && this.state.password == "pass"){
            this.props.onLogined(this.state.username,this.state.password);
        }else{
            this.setState({
                comment: "ログインに失敗しました。"
            })
        }
    }

    onLoginLoad(xhr: XMLHttpRequest){
        if(xhr.status === 200){
            this.props.onLogined(this.state.username,this.state.password);
            return
        }
        this.setState({
            comment: "ログインに失敗しました。"
        })
    }

    onUsernameChange(value:string){
        this.setState({
            username: value
        })
    }

    onPasswordChange(value:string){
        this.setState({
            password: value
        })
    }
} 