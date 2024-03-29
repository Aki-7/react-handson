import * as React from "react";
import * as Style from './Welcome.css';

interface WelcomeProps{
    name: string
    className: string
}

export class Welcome extends React.Component<WelcomeProps,{}>{
    render(){
        // return(
        //     <h1>Hello {this.props.name}!</h1> //Elementと呼ぶ
        // )

        return(
            <div className={this.props.className + " " + Style.container}>
                <h1>Welcome {this.props.name}!</h1>
            </div>
        )
    }
}