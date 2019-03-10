import * as React from 'react';
import {Input as _Input} from "react-toolbox/lib/input";
import * as Stlyes from './NameInput.css';

interface Props{
    // className: string | undefined;
    className?: string
    // onChange: Function
    onChange: (value:string) => void
}
interface State{
    str: string
}

export class Input extends React.Component<Props,State>{
    constructor(props:Props){ // stateを初期化　functionとthisをむすびつける
        super(props);
        this.state = {
            str: ""
        } 

        this.onChange = this.onChange.bind(this);
    }

    render(){
        return(
            <div className={this.props.className + " " + Stlyes.container} id="NameInputCtr">
                <h3>Input your name!</h3>
                <_Input onChange={this.onChange}  value={this.state.str}/>
            </div>
        )
    }

    shouldComponentUpdate(_:Props,nextState:State){
        if(nextState.str == "hoge"){
            return false
            // stateも戻される
        }
        return true
    }
    
    componentDidMount(){
        const elem = document.getElementById("NameInputCtr") as HTMLElement;
        const height = 5;
        const width = 10;
        elem.style.height = String(height * 50) + 'px';
        elem.style.width  = String(width * 50) + 'px';
    }

    onChange(value:string){
        this.setState({
            str: value
        })
        // this.setState((prevState:State,prevProps:Props) => {
        //     return {str: value}
        // })
        this.props.onChange(value);
    }
}