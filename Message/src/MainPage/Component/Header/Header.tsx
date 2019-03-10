import * as React from "react";
import {AppBar} from "react-toolbox/lib/app_bar";

interface HeaderProps{
    className: string
}
interface HeaderState{

}

export class Header extends React.Component<HeaderProps,HeaderState>{
    render(){
        return (
            <AppBar className={this.props.className}>
                Message
            </AppBar>
        )
    }
}