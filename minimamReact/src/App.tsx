import * as React from "react";

import * as Style from "./Layout.css"; 

import {
    Welcome
} from './Component';

export class App extends React.Component{
    render(){
        // return(
        //     <div>Hello World</div>
        // )
        
        // const name = "World";
        // const hi  = <h1>Hello {name}</h1>;
        // return(
        //     <div style={{width:500,height:200,backgroundColor:'red'}} className="something">
        //         {hi}
        //     </div>
        // )

        // return(
        //     React.createElement(
        //         "h1",
        //         {style:{background: "red",width:"500px"}},
        //        "Hello World" 
        //     )
        // )

        // const str = "<h1> Injection Attack!!! </h1>"
        // return(
        //     <div>
        //         {str}
        //     </div>
        // )

        // const name = "React user";
        // return(
        //     // </> 的な書き方もできる。
        //     // Componentと呼ぶので、Component dirをつくる   
        //     <Welcome name={name}/>　// propsと呼ぶ
        // )

        return(
            <div>
                <Welcome name="Sara" className={Style.welcomeSara} />
                <Welcome name="Emi"  className={Style.welcomeEmi} />
                <Welcome name="Mai"  className={Style.welcomeMai} />
            </div>
        )
    }
}



