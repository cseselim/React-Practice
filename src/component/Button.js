import React from "react";

class Button extends React.Component{

    shouldComponentUpdate(nextProps){
        const { change: currentChange } = this.props;
        const { change: nextChange } = nextProps;
        if(currentChange == nextChange){
            return false
        }else{
            return true;
        }
    }

    render(){
        console.log("button component render");
        const {change, local} = this.props;
        return (
            <>
                <button type="button" onClick={()=> change(local)}>Click Here</button>
            </>
        )
    }
}

export default Button;