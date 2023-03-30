import React from "react";

class Button extends React.Component{

    shouldComponentUpdate(nextProps){
        const { change: currentChange, local: currentLocal } = this.props;
        const { change: nextChange, local: nextLocal } = nextProps;
        if(currentChange == nextChange && currentLocal == nextLocal){
            return false
        }else{
            return true;
        }
    }

    render(){
        console.log("button component render");
        const {change, local} = this.props;
        return (
                <button type="button" onClick={()=> change(local)}>
                    { local == 'bn-BD' ? 'বাংলা':'English'}
                </button>
        )
    }
}

export default Button;