import * as React from "react";

import * as Style from "./Layout.css"; 

import {
    Welcome
} from './Component';


export class App extends React.Component{
    render(){
        return(
            <div>
                <Welcome name="Sara" className={Style.welcomeSara} />
            </div>
        )
    }
}




