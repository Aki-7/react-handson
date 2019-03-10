import * as React from "react";

interface Props{
    className: string
}
interface State{
    text:string
    textElement: HTMLElement
}

export class TextArea extends React.Component<Props,State> {
    constructor(props:Props){
        super(props);
        this.state = {
            text: "Input here!",
            textElement: document.getElementById("textarea")
        }

        this.onChange = this.onChange.bind(this);
    }

    render(){
        return(
            <div className={this.props.className}>
                <div>Input your self introduction.</div>
                <textarea 
                    name="textarea" 
                    id="textarea" cols={30} rows={10} 
                    value={this.state.text}
                    onChange={this.onChange}
                />
            </div>
        )
    }

    onChange(ev:React.ChangeEvent<HTMLTextAreaElement>){
        this.setState({
            text: ev.target.value
        })
    }
}