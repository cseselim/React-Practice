import React from "react";
import Button from "./Button";
import Clock from "./Clock";


class ConditionalRendaringAndListKey extends React.Component{
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
        const {date, local } = this.state;
        return (
            <>
            <h1 className="heading">
                <span className='text'>
                    { date. toLocaleTimeString(local) }
                </span>
            </h1>
            {
                local === 'bn-BD' ? (
                <Button change = {this.handleClick} local = "en-US" />
                ):( 
                <Button change = {this.handleClick} local = "bn-BD" />
                )
            }
            
            </>
        );
    }
}

export default ConditionalRendaringAndListKey;