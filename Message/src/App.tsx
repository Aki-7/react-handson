import * as React from "react";
import {Login} from "./Login/Login";
import {MainPage} from "./MainPage/MainPage";

interface AppProps{

}
interface AppState{
    isLogined: boolean
}

export class App extends React.Component<AppProps,AppState>{
    constructor(props: AppProps){
        super(props);
        this.state = {
            isLogined: false
        }
        this.onLogined = this.onLogined.bind(this);
        this.gotoLogin = this.gotoLogin.bind(this);
    }
    
    render(){
        if(this.state.isLogined){
            return <MainPage gotoLogin={this.gotoLogin}/>
        }else{
            return <Login onLogined={this.onLogined} /> 
        }
    }

    onLogined(username:string,password:string){
        this.setState({
            isLogined: true,
        })
    }

    gotoLogin(){
        this.setState({
            isLogined: false
        })
    }
}