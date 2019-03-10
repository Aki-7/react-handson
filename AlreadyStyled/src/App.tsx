import * as React from "react";

import * as Style from "./Layout.css"; 

import {
    Welcome, Input
} from './Component';

interface Props{

}
interface State{
    name: string
}

export class App extends React.Component<Props,State>{

    constructor(props:Props){
        super(props);
        this.state = {
            name: ""
        }
        this.onChange = this.onChange.bind(this);
    }

    render(){
        return(
            <div>
                <Input onChange={this.onChange}/>
                {/* <Welcome name="Sara" className={Style.welcomeSara} /> */}
                <Welcome name={this.state.name} className={Style.welcomeSara} />
            </div>
        )
    }

    onChange(value:string){
        this.setState({
            name: value
        })
    }
}




