import * as React from "react";
import {Button} from "react-toolbox/lib/button";
import * as Style from "./CardHeader.css";

interface CardHeaderProps{
    onLogin: () => void
    className: string
}
interface CardHeaderState{

}

export class CardHeader extends React.Component<CardHeaderProps,CardHeaderState>{
    render(){
        return(
            <div className={this.props.className}>
                Login
                <Button label="送信" 
                    className={Style.button}
                    onClick={this.props.onLogin}
                    raised
                />
            </div>
        )
    }
}