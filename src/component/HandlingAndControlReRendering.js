import React from "react";
import Button from "./Button";

class HandlingAndControlReRendering extends React.Component{
    constructor(props){
        super(props);
        this.state = { date: new Date(), local: 'bn-BD' };
    }
    componentDidMount(){
        this.clockTimer = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.clockTimer);
    }

    tick(){
        this.setState({
            date: new Date(),
        });
    }

    handleClick = (local) =>{
        this.setState({
            local
        })
    }
    

    render(){
        console.log("clock component render");
        const {date, local } = this.state;
        return (
            <>
            <h1 className="heading">
                <span className='text'>
                    { date. toLocaleTimeString(local) }
                </span>
            </h1>
            <Button change = { this.handleClick } local = "en-US"/>
            </>
        );
    }
}

export default HandlingAndControlReRendering;
